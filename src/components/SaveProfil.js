import { useContext } from "react";
import {
    updateDoc,
    doc,
} from "firebase/firestore";
import { db } from '../firebase';

import { ProfilContext } from "../contexts/ProfilContext";

import "./SaveProfil.css";

export default function SaveProfil({updateHandler}) {

    const profilCtx = useContext(ProfilContext);

    // const updateHandler = async (profil) => {
    //     await updateDoc(doc(db, 'profilData', profil.id), {
    //         profil:profil
    //     });
    //   };

    

    return (
        <div>
            {profilCtx.profilData.map((profil, index) => (
                <div className="form_date">
                    <div className="profle_row">
                        <div
                            key={index}
                            profil={profilCtx.profilData}
                        ><p><label>Nume: <b className="style_email">{profil.firstName}</b></label></p></div>
                        <div
                            key={index}
                            profil={profilCtx.profilData}
                        ><p><label>Prenume: <b className="style_email">{profil.lastName}</b></label></p></div>
                    </div>
                    <div className="profle_row">
                        <div
                            key={index}
                            profil={profilCtx.profilData}
                            // updateHandler={updateHandler}
                        ><p><label>Facultate: <b className="style_email">{profil.school}</b></label></p></div>
                        <div
                            key={index}
                            profil={profilCtx.profilData}
                            // updateHandler={updateHandler}
                        ><p><label>Camin: <b className="style_email">{profil.dorm}</b></label></p></div>
                    </div>
                </div>
            ))}
        </div>
    );
}