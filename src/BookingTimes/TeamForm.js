import React, { useState, useEffect, useRef, useContext } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { UserAuth } from "../contexts/AuthContext";
import "./MiniFotbalTime.css";
import "./TeamForm.css";
import { Alert } from "./Alert";
import { Alert12 } from "./Alert12";
import { ModalContext } from "../contexts/ModalContext";

function TeamForm(props) {
  const [playerName, setPlayerName] = useState(
    props.edit ? props.edit.value : ""
  );

  const { uid } = auth.currentUser;
  const [addbutton, setAddbutton] = useState(false);
  const { user } = UserAuth();
  const inputRef = useRef(null);
  const modalCtx = useContext(ModalContext);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  //creare colectie teams
  async function TeamMaker(event) {
    event.preventDefault();
    try {
      const querySnapshot = await getDocs(
        collection(db, `${modalCtx.id}`)
      );
      const existingUser = querySnapshot.docs.find(
        (doc) => doc.data().user_email === user.email
      );
      if (existingUser) {
        console.log("User email already exists in the subcollection");
        setAddbutton(true);
        return;
      }
      if (querySnapshot.docs.length === 12) {
        console.log("Maximum document limit reached (12 documents)");
        setBooked(true);
        return;
      }
      await addDoc(collection(db, `${modalCtx.id}`), {
        user_email: user.email,
        name: playerName,
        uid,
      });
      setPlayerName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {props.edit ? (
          <></>
        ) : (
          <>
            <>
              <form onSubmit={TeamMaker} className="todo-form">
                <input
                  placeholder="Adauga-ma"
                  value={playerName}
                  onChange={handleChange}
                  name="text"
                  className="todo-input"
                  ref={inputRef}
                />
                <button className="todo-button" type="submit">
                  Adauga-ma
                </button>
              </form>
            </>
            <>
              {addbutton ? (<div>
                <Alert />
              </div>) : null}
            </>
            <>
              {booked ? (<div>
                <Alert12 />
              </div>) : null}
            </>
          </>

        )}
      </div>
    </>
  );
}

export default TeamForm;