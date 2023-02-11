import React, { useState, useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ModalContext } from "../contexts/ModalContext";

import TeamForm from "./TeamForm";
import Team from "./Team";


function TeamList() {
  const [teams, setTeams] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [addbutton, setAddbutton] = useState(true);
  const modalCtx = useContext(ModalContext);

  const addTeam = (team) => {
    if (!team.text || /^\s*$/.test(team.text)) {
      return;
    }
    setAddbutton(false);
    setTeams([team, ...teams]);
    console.log(...teams);
  };

  const updateTeam = (teamId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTeams((prev) =>
      prev.map((item) => (item.id === teamId ? newValue : item))
    );
  };

  const deleteTeam = async (id) => {
    try {
      await deleteDoc(doc(db, `${modalCtx.id}`, id));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <>
        <>
          <h1 className="players">Crează echipa</h1>
          <TeamForm onSubmit={addTeam} />
        </>
      <Team
        workData={workData}
        teams={teams}
        deleteTeam={deleteTeam}
        updateTeam={updateTeam}
      />
    </>
  );
}

export default TeamList;
