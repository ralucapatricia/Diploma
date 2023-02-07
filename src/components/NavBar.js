import "./NavBar.css";
import { NavLink } from "react-router-dom";
import home from "../IMG/home.png";



export default function NavBar() {
    return (
        <div className="navbar row1">
            <div style={{marginLeft:'20px',}}>
                <NavLink to="/"><img src={home} alt='' width="40" height="40"/></NavLink>
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
                <NavLink to="Laundry" className="link">Spalatorie</NavLink>
                <NavLink to="History" className="link">Istoric</NavLink>
                <NavLink to="Profile" className="link">UserName</NavLink>
            </div>
          
        </div>
   
    );
}