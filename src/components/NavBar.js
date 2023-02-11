import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

import home from "../IMG/home.png";
import logoutphoto from "../IMG/logout.png";


export default function NavBar() {

    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await logout();
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    return ( 
        <>
        {(user) && 
            <div className="navbar row1">
            <div style={{ marginLeft: '20px', }}>
                <NavLink to="/HomePage"><img src={home} alt='' width="40" height="40" /></NavLink>
            </div>
            <div className="row2">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
                </style>
                <div className="dropdown">
                    <span className="link">Baze sportive</span>
                    <div className="dropdown_content">
                        <NavLink className="navLink" to="/TerenMinifotfal">Teren Minifotfal</NavLink>
                        <NavLink className="navLink" to="/TerenHandbal">Teren Handbal</NavLink>
                        <NavLink className="navLink" to="/TerenBaschet">Teren Baschet</NavLink>
                        <NavLink className="navLink" to="/TerenTenis">Teren Tenis nr.4</NavLink>
                    </div>
                </div>
                <NavLink to="History" className="link">Istoric</NavLink>
                <NavLink to="Profile" className="link">Profil</NavLink>
                <img onClick={logoutHandler} className="logout" src={logoutphoto} alt='' width="40" height="40" />
            </div>
            </div>
    }
        </>
    );
}