import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../firebase";

import "./TextRegister.css";
import AuthenticationCard from "./AuthenticationCard";
import logo from "../IMG/logo.png";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/CreazaCont");
    }, [user, loading]);
    return (
        <body>
            <AuthenticationCard>
                <style>@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');</style>
                <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');</style>
                <div style={{ textAlign: 'center' }}><img src={logo} alt='' width="100" height="100" /></div>
                <h1 className="title">Universitatea Politehnica Timișoara</h1>
                <div className="user_date" >
                    <div className="spacing_label" >
                        <label for="EmailBox"><h4 style={{ marginLeft: '217px' }}>Email</h4></label>
                        <p style={{ textAlign: 'center', marginBottom: '30px' }}>< input className="email_parola" value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="EmailBox" placeholder="Introduceti email-ul" required></input></p>
                    </div>
                    <div className="spacing_label">
                        <p><label for="PasswordBox"><h4 style={{ marginLeft: '217px' }}>Parola</h4></label></p>
                        <p style={{ textAlign: 'center' }}><input type="password" className="email_parola" value={password}
                            onChange={(e) => setPassword(e.target.value)} name="pass" id="PasswordBox" placeholder="Introduceti Parola" required></input></p>

                    </div>
                    <div className="spacing_label">
                        <p><label for="Name"><h4 style={{ marginLeft: '217px' }}>Nume complet</h4></label></p>
                        <p style={{ textAlign: 'center' }}><input type="name" className="email_parola" value={name}
                            onChange={(e) => setName(e.target.value)} name="name" id="NameBox" placeholder="Introduceti Numele" required></input></p>
                    </div>
                    {/* <div className="spacing_label">
                        <p><label for="Name"><h4 style={{ marginLeft: '217px' }}>Facultatea</h4></label></p>
                        <p style={{ textAlign: 'center' }}><input type="facultate" className="email_parola" name="facultate" id="FacultateBox" placeholder="Introduceti Facultatea" required></input></p>
                    </div> */}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button onClick={register}><h4>Creaza cont</h4></button>
                    <p><NavLink className='cont' to="/">Autentificare</NavLink></p>
                </div>
            </AuthenticationCard>
        </body >
    );
}

