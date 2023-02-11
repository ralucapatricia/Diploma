import { useContext, useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
   
} from "firebase/storage";
import { storage} from "../firebase";
import { db } from '../firebase';
import {
    collection, addDoc, query, onSnapshot, getCountFromServer, updateDoc,
    doc,
} from "firebase/firestore";
import { updateProfile } from "firebase/auth";


import "./TextProfile.css";
import CardProfile from "./CardProfile";
import userPhoto from "../IMG/user.png";
import ElipseCard from "./EipseCard";
import Modal from "./Modal";
import { ModalContext } from "../contexts/ModalContext";
import { ProfilContext } from "../contexts/ProfilContext";
import success1 from "../IMG/success.jpg";
import SaveProfil from "./SaveProfil"
import { UserAuth } from "../contexts/AuthContext";

export default function TextProfile() {

    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const [addable, setAddable] = useState(true);
    const [activateEdit, setActivateEdit] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);
    const [activeProfile, setActiveProfil] = useState(true);
    const [compButton, setCompButton] = useState(true);
    const [editButton, setEditButton] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');
    const [dorm, setDorm] = useState('');

    const profilCtx = useContext(ProfilContext);
    const { user } = UserAuth();
    const modalCtx = useContext(ModalContext);
    function editHandler() {
        setActivateEdit(true);
        setActiveProfil(false);
        setEditButton(false);
    }
    function saveModificationHandler() {
        setEditButton(false);
    }
    function activeEditHandler() {
        setActiveProfil(false)
        setActiveEdit(true);
        setCompButton(false);
    }
    function activeProfileHandler() {
        setActiveProfil(true);
        setActiveEdit(false);
        setActivateEdit(false);
        setCompButton(true);
        setEditButton(true);
    }
    function firstNameHandler(event) {
        setFirstName(event.target.value);
    }
    function lastNameHandler(event) {
        setLastName(event.target.value);
    }
    function schoolHandler(event) {
        setSchool(event.target.value);
    }
    function dormHandler(event) {
        setDorm(event.target.value);
    }
    function closeModalHandler() {
        modalCtx.openModal(false);
    }
    //punem in baza
    const ProfilDate = async (event) => {
        event.preventDefault(event);
        try {
            if (firstName === "" || lastName === "" || school === "" || dorm === "") {
                console.log("error goale");
            }
            else {
                await addDoc(collection(db, 'profilData'), {
                    firstName: firstName,
                    lastName: lastName,
                    school: school,
                    dorm: dorm,
                    email_store: user.email
                });
                modalCtx.messageModal("Detaliile au fost salvate cu succes!");
                modalCtx.imageModal(success1);
            }
        }
        catch (error) {
            console.log("error2!");
        }
        setActiveProfil(true);
        setFirstName("");
        setLastName("");
        setSchool("");
        setDorm("");
        modalCtx.openModal(true);
    };

    //citim din baza
    useEffect(() => {
        const q = query(collection(db, 'profilData'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let baseProfilArr = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().email_store === user.email) {
                    baseProfilArr.push({ ...doc.data(), id: doc.id });
                }
            });
            profilCtx.getProfilData(baseProfilArr);
        });

        return () => unsubscribe();
    });

    //luam conditionat din baza
    useEffect(() => {
        async function getNumberRecords() {
            try {
                const coll = collection(db, 'profilData');
                const snapshot = await getCountFromServer(coll);
                console.log('count: ', snapshot.data().count);
                if (snapshot.data().count !== 0) {
                    profilCtx.profilData.map((profil) => {
                        if (profil.email_store === user.email) {
                            setAddable(false);
                            setCompButton(false);
                            setEditButton(false);
                        }
                    })
                }
            }
            catch (error) {
                console.log("catch");
            }
        }
        getNumberRecords();
    });
    //profile pictures

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
          }
    }

      async function upload(file, user, setLoading) {
        const fileRef = ref(storage, user.uid + '.png');
        setLoading(true);
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(snapshot.ref);
        setPhotoURL(photoURL); 
        updateProfile(user, { photoURL });
        setLoading(false);
      }
    
      async function handleClick() {
        setLoading(true);
        await upload(photo, user, setLoading);
      }

    useEffect(() => {
        if (user?.photoURL) {
            setPhotoURL(user.photoURL);
        }
    }, []);


    function updateHandler(event) {
        event.preventDefault();
        setSchool("");
        setDorm("");
    }

    const updateSchoolHandler = (profil, event) => {
        setSchool(event.target.value);
        updateDoc(doc(db, 'profilData', profil.id), {
            school: school,
        });
        console.log("called");
    }
    const updateDormHandler = (profil, event) => {
        setDorm(event.target.value);
        updateDoc(doc(db, 'profilData', profil.id), {
            school: school,
        });
        console.log("called");
    }
    return (
        <div className="text_profile">
            {modalCtx.open && <Modal onClosing={closeModalHandler} messageModal={modalCtx.message} imageModal={modalCtx.image} />}
            <CardProfile className="personal_data">
                <div className="title_profile">
                    <img className="user_img" src={userPhoto} />
                    <span>Date personale</span>
                </div>
                <div>
                    <div>
                        {activeEdit && <>
                            {addable && <form className="form_date" onSubmit={ProfilDate}>
                                <div className="profle_row">
                                    <div>
                                        <p><label>Nume:</label></p>
                                        <input className="date_user" required onChange={firstNameHandler} value={firstName}></input>
                                    </div>
                                    <div>
                                        <p><label>Prenume:</label></p>
                                        <input className="date_user" required onChange={lastNameHandler} value={lastName}></input>
                                    </div>
                                </div>
                                <div className="profle_row">
                                    <div>
                                        <p><label>Facultate:</label></p>
                                        <input className="date_user" required onChange={schoolHandler} value={school}></input>
                                    </div>
                                    <div>
                                        <p><label>Camin:</label></p>
                                        <input className="date_user" required onChange={dormHandler} value={dorm}></input>
                                    </div>
                                </div>
                                <button type="submit" className="button_user" onClick={saveModificationHandler}>Salvare modificari</button>
                            </form>}</>}
                    </div>
                    {activateEdit && <form className="form_date" onSubmit={updateHandler}>
                        <div className="profle_row">
                            <div>
                                <p><label>Facultate:</label></p>
                                <input className="date_user" required onChange={updateSchoolHandler} value={school}></input>
                            </div>
                            <div>
                                <p><label>Camin:</label></p>
                                <input className="date_user" required onChange={updateDormHandler} value={dorm}></input>
                            </div>
                        </div>
                        <button type="submit" className="button_user" >Salvare modificari</button>
                    </form>}
                    <div>
                        {activeProfile && <SaveProfil updateHandler={updateHandler} />}
                    </div>
                </div>
                <p><label className="email_profile">Email:  </label><b className="style_email">{user && user.email}</b>
                </p>
                <div className="profle_row2">
                    <div className="row_button">
                        {compButton && <button className="button_user" onClick={activeEditHandler}>Completeaza detaliile contului</button>}
                        {!activeProfile && <button className="button_user" onClick={activeProfileHandler}>Inapoi la profil</button>}
                    </div>
                    <div className="position_buttons">
                        <button disabled={loading || !photo} onClick={handleClick} className="uploadBtn"> Încarcă fotografia</button>
                        <ElipseCard>
                            <input
                                type="file"
                                name="file" id="file" class="inputfile"
                                onChange={handleChange}
                            />
                            <label for="file" className="choiceBtn">Alege poza</label>
                            <img src={photoURL} className="profile_picture" />
                        </ElipseCard>
                    </div>
                </div>
            </CardProfile>
        </div >
    );
}