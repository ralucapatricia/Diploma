import React, { useState, useEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";
import { UserAuth } from "../contexts/AuthContext";
import "./MiniFotbalTime.css";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import "./Team.css";

const Team = ({ completeTeam, updateTeam, deleteTeam }) => {
  const [workData, setWorkData] = useState([]);
  const { user } = UserAuth();
  const [teammate, setTeammate] = useState([]);
  const [newName, setNewName] = useState("");
  const [activeForm, setActiveForm] = useState(false);
  const [deleteActive, setDeleteActive] = useState(true);
  const modalCtx = useContext(ModalContext);
  const [activeSave, setActiveSave] = useState(false);
  const [editActive, setEditActive] = useState(true);

  //citim echipele 
  useEffect(() => {
    const q = query(collection(db, `${modalCtx.id}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let teammatesArr = [];
      querySnapshot.forEach((doc) => {
        teammatesArr.push({ ...doc.data(), id: doc.id });
      });
      setTeammate(teammatesArr);
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  function editHandler() {
    setActiveForm(true);
    setDeleteActive(false);
    setActiveSave(true);
    setEditActive(false);
  }
  const editTeam = async (id, newName) => {
    console.log("Apeleaza functia editare!");
    try {
      await updateDoc(doc(db, `${modalCtx.id}`, id), {
        name: newName,
      });
      setDeleteActive(true);
      setActiveForm(false);
      setActiveSave(false);
      setEditActive(true);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  async function deleteHnadler(id) {
    try {
      await deleteTeam(id);
      setWorkData([]);
    } catch (error) {
      console.error(error);
    }
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
    <>
      <div className="scrollit">
        <div>
          {teammate.map((teammates, index) => {
            return (
              <div className={
                teammates.isComplete ? "todo-row complete" : "todo-row"
              } key={index}>
                <span id="tooltip2">
                  <span id="aboutText2">
                    {profilData.map((profil, index) => {
                      return (
                        <> {teammates.user_email === profil.email_store ? (
                          <div key={index}>
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
                          {teammates.uid === url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?')).replace(/\.[^/.]+$/, "") ? (
                            <img key={url} src={url} alt="Image" className="photoAvatar" />
                          ) : null}
                        </>
                      );
                    })}
                  </span>
                  <div key={teammates.id} onClick={() => completeTeam(teammates.id)}>
                    {teammates.name}
                  </div>
                </span>
                {teammates.user_email === user.email
                  ? (
                    <div className="icons">
                      {deleteActive ? (<RiCloseCircleLine
                        onClick={() =>
                          deleteHnadler(teammates.id)
                        }
                        className="delete-icon"
                      />) : null}
                      <div>
                        {activeForm ? (
                          <form>
                            <input
                              placeholder="Update your item"
                              value={newName}
                              onChange={handleInputChange}
                              name="text"
                              className="todo-input edit"
                              required
                            />
                          </form>
                        ) : null}
                        <>
                          {editActive ? (<TiEdit
                            onClick={editHandler}
                            className="edit-icon"
                          />) : null}
                          {activeSave ? (<button
                            onClick={() =>
                              editTeam(teammates.id, newName)
                            }
                            className="save_buttion"
                          >
                            Salvează
                          </button>) : null}
                        </>
                      </div>
                    </div>
                  ) : null
                }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
