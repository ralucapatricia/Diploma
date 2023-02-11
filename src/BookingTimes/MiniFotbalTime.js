import { useState, useEffect, useCallback, useContext } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";


import "./MiniFotbalTime.css";
import succes from "../IMG/success.jpg";
import { UserAuth } from "../contexts/AuthContext";
import Delete from "./Delete";
import { ModalContext } from "../contexts/ModalContext";

import ShowTeam from "./ShowTeam";


export default function MiniFotbalTime(props) {
  const [activeRezervation1, setActiveRezervation1] = useState(true);
  const [rezervations1, setRezervations1] = useState([]);
  const [rezervations2, setRezervations2] = useState([]);
  const [deleteActivation, setDeleteActivation] = useState(false);
  const [dataUid, setDataUid] = useState([]);
  const [date1, setDate1] = useState([]);
  const [date2, setDate2] = useState([]);
  const [count, setCount] = useState(0);
  const [detalii, setDetalii] = useState("");
  const [createTeam, setCreateTeam] = useState(false);
  const [subColData, setSubColData] = useState([]);
  const [checkList, setCheckList] = useState(false);
  const [teamIcon, setTeamIcon] = useState(false);

  const currentDate = new Date();
  const { user } = UserAuth();
  const hour1 = "20:30 - 22:00";
  const hour2 = "22:00 - 23:30";

  const { uid } = auth.currentUser;
  const modalCtx = useContext(ModalContext);

  function detaliiHandler(event) {
    setDetalii(event.target.value);
  }

  useEffect(() => {
    try {
      if (!dataUid.includes(auth.currentUser.uid)) {
        if (props.date.getDate() < currentDate.getDate()) {
          setActiveRezervation1(false);
        } else if (currentDate.getDate() + 7 < props.date.getDate()) {
          setActiveRezervation1(false);
        } else if (
          currentDate.getDate() === props.date.getDate() &&
          hour1 < currentDate.getHours()
        ) {
          setActiveRezervation1(false);
        } else {
          setActiveRezervation1(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [props.date.getDate()]);

  const displayInfo1 = useCallback(() => {
    try {
      addDoc(collection(db, "rezervations"), {
        date: props.date.toDateString(),
        store_email: user.email,
        hour: hour1,
        uid,
      });
    } catch (error) {
      console.log("error2!");
    }
  }, [props.date.getDate(), user]);

  const displayInfo2 = useCallback(() => {
    try {
      addDoc(collection(db, "rezervations"), {
        date: props.date.toDateString(),
        store_email: user.email,
        hour: hour2,
        uid,
      });
      setTeamIcon(true);
    } catch (error) {
      console.log("error2!");
    }
  }, [props.date.getDate(), user]);

  
  useEffect(() => {
    try {
      const q = query(collection(db, "rezervations"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDataUid((dataUid) => [...dataUid, doc.data().uid]);
          console.log("fetch");
          if (doc.data().hour === hour1) {
            setDate1((date) => [...date, doc.data().date]);
            rezervations1.push({ ...doc.data(), id: doc.id });
            setRezervations1(rezervations1);
          } else {
            setDate2((date) => [...date, doc.data().date]);
            rezervations2.push({ ...doc.data(), id: doc.id });
            setRezervations2(rezervations2);
          }
          if (doc.data().uid === auth.currentUser.uid) {
            setActiveRezervation1(false);
            setDeleteActivation(true);
            setCreateTeam(true);
          } else if (count < 0) {
            setActiveRezervation1(true);
            setDeleteActivation(false);
            setCreateTeam(false);
          }
        });
      });
      return () => unsubscribe();
    } catch (error) {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const db = getFirestore();
      const q = query(collection(db, "rezervations"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      data.map(async (elem) => {
        const workQ = query(
          collection(db, `rezervations/${elem.id}/more-details`)
        );
        const workDetails = await getDocs(workQ);
        const workInfo = workDetails.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSubColData(workInfo);
        if (subColData) {
          setCreateTeam(false);
          setCheckList(true);
        }
      });
    };
    getData();
  }, [user]);

  async function deleteRezervation1(id, rezervation) {
    try {
      await deleteDoc(doc(db, "rezervations", id));
      setDeleteActivation(false);
      setActiveRezervation1(true);
      setTeamIcon(false);
      setCheckList(false);
      if (rezervation.hour === hour1) {
        setDate1([]);
      } else {
        setDate2([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function clickTeamHandlerTime(id) {
    modalCtx.openModal(true);
    modalCtx.idModal(id);
  }

  const [profilData, setProfilData] = useState([]);

  //citim profilele
  useEffect(() => {
    const q = query(collection(db, "profilData"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let profilArr = [];
      querySnapshot.forEach((doc) => {
        profilArr.push({ ...doc.data(), id: doc.id });
      });
      setProfilData(profilArr);
    });
    return () => unsubscribe();
  }, []);

  const [imageUrls, setImageUrls] = useState(["https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"]);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage);
      try {
        const result = await listAll(storageRef);
        const urls = await Promise.all(
          result.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.log('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="position_time">
      <table id="myTable">
        <tr class="header">
          <th>Interval orar</th>
          <th>Data</th>
          <th>Rezerva</th>
          <th>Beneficiar</th>
        </tr>
        <tr
          className={`${date1.includes(props.date.toDateString()) ? "booked_time" : ""
            }`}
        >
          <td>20:30 - 22:00</td>
          <td>{props.date.toDateString()}</td>
          <td>
            {!date1.includes(props.date.toDateString()) &&
              activeRezervation1 ? (
              <button onClick={displayInfo1} className="rezervation_button">
                Rezerva
              </button>
            ) : null}
          </td>
          <td>
            <div>
              {rezervations1.map((rezervation, index) => {
                return (
                  <>
                    {deleteActivation && (
                      <span id="tooltip">
                        <span id="aboutText">
                          {profilData.map((profil, index) => {
                            return (
                              <> {rezervation.store_email === profil.email_store ? (<div key={index}>
                                <p>Nume: {profil.firstName}</p>
                                <p>Prenume: {profil.lastName}</p>
                                <p>Camin: {profil.dorm}</p>
                                <p>Facultate: {profil.school}</p>
                              </div>) : null}
                              </>
                            );
                          })}
                          {imageUrls.map((url) => {
                            return (
                              <>
                                {/* <p>URL: {url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?')).replace(/\.[^/.]+$/, "")}</p>
                                <p>UID: {rezervation.uid}</p> */}
                                {rezervation.uid === url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?')).replace(/\.[^/.]+$/, "") ? (
                                  <>
                                    <img key={url} src={url} alt="Image" className="photoAvatar2" /></>
                                ) : null}
                              </>
                            );
                          })}
                        </span>
                        <span key={rezervation.index} >
                          {props.date.toDateString() === rezervation.date &&
                            rezervation.store_email}
                        </span>
                      </span>
                    )}
                    {deleteActivation &&
                      auth.currentUser.uid === rezervation.uid &&
                      props.date.toDateString() === rezervation.date ? (
                      <Delete
                        rezervation={rezervation}
                        deleteHandler={deleteRezervation1}
                      >
                        Sterge rezervare
                      </Delete>
                    ) : null}
                    {checkList &&
                      props.date.toDateString() === rezervation.date ? (
                      <ShowTeam
                        rezervation={rezervation}
                        clickTeamHandler={clickTeamHandlerTime} />
                    ) : null}
                  </>
                );
              })}
            </div >
          </td>
        </tr>
        <tr
          className={`${date2.includes(props.date.toDateString()) ? "booked_time" : ""
            }`}
        >
          <td>22:00 - 23:30</td>
          <td>{props.date.toDateString()}</td>
          <td>
            {!date2.includes(props.date.toDateString()) &&
              activeRezervation1 ? (
              <button onClick={displayInfo2} className="rezervation_button">
                Rezerva
              </button>
            ) : null}
          </td>

          <td>
            <div>
              {rezervations2.map((rezervation, index) => {
                return (
                  <>
                    {deleteActivation && (

                      <span id="tooltip">
                        <span id="aboutText">
                          {profilData.map((profil, index) => {
                            return (
                              <> {rezervation.store_email === profil.email_store ? (<div key={index}>
                                <p>Nume: {profil.firstName}</p>
                                <p>Prenume: {profil.lastName}</p>
                                <p>Camin: {profil.dorm}</p>
                                <p>Facultate: {profil.school}</p>
                              </div>) : null}
                              </>
                            );
                          })}
                          {imageUrls.map((url) => {
                            return (
                              <>
                                {/* <p>URL: {url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?')).replace(/\.[^/.]+$/, "")}</p>
        <p>UID: {rezervation.uid}</p> */}
                                {rezervation.uid === url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?')).replace(/\.[^/.]+$/, "") ? (
                                  <>
                                    <img key={url} src={url} alt="Image" className="photoAvatar2" /></>
                                ) : null}
                              </>
                            );
                          })}
                        </span>
                        <span key={rezervation.index} >
                          {props.date.toDateString() === rezervation.date &&
                            rezervation.store_email}
                        </span>
                      </span>
                    )}
                    {deleteActivation &&
                      auth.currentUser.uid === rezervation.uid &&
                      props.date.toDateString() === rezervation.date ? (
                      <Delete
                        rezervation={rezervation}
                        deleteHandler={deleteRezervation1}
                      >
                        Sterge rezervare
                      </Delete>
                    ) : null}
                    {checkList &&
                      props.date.toDateString() === rezervation.date ? (
                      <ShowTeam
                        rezervation={rezervation}
                        clickTeamHandler={clickTeamHandlerTime} />
                    ) : null}
                  </>
                );
              })}
            </div>
          </td>
        </tr>
      </table>
      <div>
        {deleteActivation
          ? rezervations2.map((rezervation, index) => {
            return (
              <span key={index}>
                {auth.currentUser.uid === rezervation.uid &&
                  `Ai facut o rezervare în data de: ${rezervation.date}`}
              </span>
            );
          })
          : null}
        {deleteActivation
          ? rezervations1.map((rezervation, index) => {
            return (
              <span key={index}>
                {auth.currentUser.uid === rezervation.uid &&
                  `Ai facut o rezervare în data de: ${rezervation.date}`}
              </span>
            );
          })
          : null}
        {deleteActivation ? (
          <img className="succes_booking" src={succes} alt="" />
        ) : null}
      </div>
    </div>
  );
}
