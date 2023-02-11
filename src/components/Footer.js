import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Footer.css";
import facebook from "../IMG/facebook.png";
import twitter from "../IMG/twitter.jpg";
import google from "../IMG/google.png";
import { UserAuth } from "../contexts/AuthContext";

export default function Footer() {
  const { user } = UserAuth();

  const navigate = useNavigate();

  function toHomeHandler() {
    if (!user) {
      navigate("/");
    } else {
      navigate("/HomePage");
    }
  }

  return (
    <div className="footer">
      <div className="footer_title">
        <h1 className="title_size" onClick={toHomeHandler}>
          UPT
        </h1>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
        </style>
        <ul className="footer_content">
          <p>
            <NavLink to="/DespreNoi" className="nav">
              Despre noi
            </NavLink>
          </p>
          <p>
            <NavLink to="/Contact" className="nav">
              Contact
            </NavLink>
          </p>
        </ul>
        <ul className="footer_content">
          {user && (
            <>
              <p>
                <NavLink to="/Ajutor" className="nav">
                  Ajutor
                </NavLink>
              </p>{" "}
              <p>
                <NavLink to="/FolosireaAplicatiei" className="nav">
                  Folosirea Aplicatiei
                </NavLink>
              </p>
            </>
          )}
        </ul>
      </div>
      <hr
        style={{
          marginLeft: "50px",
          marginRight: "50px",
        }}
      />
      <ul>
        <div className="footer_logo">
          <a
            href="https://www.facebook.com/UPTimisoara"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="" width="30" height="30" />
          </a>
          <a
            href="https://www.facebook.com/UPTimisoara"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" width="30" height="30" />
          </a>
          <a
            href="https://www.upt.ro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={google} alt="" width="30" height="30" />
          </a>
        </div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
        </style>
        <h5 className="footer_copy">
          © Copyright 2023 Universitatea Politehnica Timisoara. Toate drepturile
          rezervate
        </h5>
      </ul>
    </div>
  );
}
