import "./Footer.css";
import { NavLink } from "react-router-dom";
import facebook from "../IMG/facebook.png";
import twitter from "../IMG/twitter.jpg";
import google from "../IMG/google.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_title"><h1 className="title_size">UPT</h1>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
                </style>
                <ul className="footer_content">
                    <p><NavLink to="/AboutUs" className="nav">Despre noi</NavLink></p>
                    <p><NavLink to="/ContactUs" className="nav">Contact</NavLink></p>
                </ul>
                <ul className="footer_content">
                    <p><NavLink to="/Privacy" className="nav">Ajutor</NavLink></p>
                    <p><NavLink to="/Terms" className="nav">Terms Of Use</NavLink></p>
                </ul>
            </div>
            <hr
                style={{
                    marginLeft: '50px',
                    marginRight: '50px',
                }}
            />
            <ul>
                <div className="footer_logo">
                    <a href="https://www.facebook.com/UPTimisoara" target="_blank" rel="noreferrer">
                        <img src={facebook} alt='' width="30" height="30" />
                    </a>
                    <a href="https://www.facebook.com/UPTimisoara" target="_blank" rel="noreferrer">
                        <img src={twitter} alt='' width="30" height="30" />
                    </a>
                    <a href="https://www.facebook.com/UPTimisoara" target="_blank" rel="noreferrer">
                        <img src={google} alt='' width="30" height="30" />
                    </a>
                </div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');</style>
                <h5 className="footer_copy">© Copyright 2023 Universitatea Politehnica Timisoara. Toate drepturile rezervate</h5>
            </ul>
        </div>
    );
}