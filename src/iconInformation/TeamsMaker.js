import { useState, useContext} from 'react';

import "./TeamsMaker.css";
import team from "../IMG/team.jpg";
import { ModalContext } from "../contexts/ModalContext";
import success1 from "../IMG/success.jpg";


export default function TeamsMaker({detalii, CreateTeam, detaliiHandler}) {
    const [activeTeam, setActiveTeam] = useState(false);
    const modalCtx = useContext(ModalContext);
    

    function teamHandler(){
        setActiveTeam(true);
    }    

    async function saveHandler(event){
        event.preventDefault(event);
        try{
            modalCtx.messageModal("Echipa a fost creată cu succes!");
            modalCtx.imageModal(success1);
        }
        catch(error)
        {
            console.log("error!");

        }
        modalCtx.openModal(true);
    }

    return (
        <div>
            <img className="team_icon" src={team} onClick={teamHandler}/>
            <form onSubmit={(event) => CreateTeam(event)}>
            {activeTeam ? <button type='submit' className='save_button'>Salveză</button> : null}
            <p>
            {activeTeam ? <label>Detalii (optional)</label> : null}
            {activeTeam ? <textarea id="subject" name="subject" style={{ height: '90px' }} value={detalii} onChange={(event) => detaliiHandler(event)}></textarea> : null}
            </p>
            </form>
        </div>
    );
}