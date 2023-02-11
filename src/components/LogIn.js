import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

import "./LogIn.css";
import AuthenticationCard from "./AuthenticationCard";
import logo from "../IMG/logo.png";

export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate("/HomePage")
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };
    return (
        <body>
            <AuthenticationCard>
                <style>@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');</style>
                <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');</style>
                <div style={{ textAlign: 'center' }}><img src={logo} alt='' width="100" height="100" /></div>
                <h1 className="title">Universitatea Politehnica Timișoara</h1>
                <form onSubmit={submitHandler}>
                <div className="user_date" >
                    <div className="spacing_label" >
                        <label for="EmailBox"><h4 style={{ marginLeft: '217px' }}>Email</h4></label>
                        <p style={{ textAlign: 'center', marginBottom: '30px' }}>< input className="email_parola" onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="EmailBox" placeholder="Introduceti email-ul" required></input></p>

                    </div>
                    <div className="spacing_label">
                        <p><label for="PasswordBox"><h4 style={{ marginLeft: '217px' }}>Parola</h4></label></p>
                        <p style={{ textAlign: 'center' }}><input type="password" onChange={(e) => setPassword(e.target.value)} className="email_parola" name="pass" id="PasswordBox" placeholder="Introduceti Parola" required></input></p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit"><h4>Autentificare</h4></button>
                        <p><NavLink className='cont' to="/CreazaCont">Creaza cont</NavLink></p>
                    </div>
                </div>
                </form>
            </AuthenticationCard>
        </body>
    );
}

