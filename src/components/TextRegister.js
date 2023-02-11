import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { UserAuth } from '../contexts/AuthContext';

import "./TextRegister.css";
import AuthenticationCard from "./AuthenticationCard";
import logo from "../IMG/logo.png";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate("/")
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }
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
                            <p style={{ textAlign: 'center', marginBottom: '30px' }}>< input className="email_parola" type="email" name="email" id="EmailBox" onChange={(e) => setEmail(e.target.value)}
                                placeholder="Introduceti email-ul" required></input></p>
                        </div>
                        <div className="spacing_label">
                            <p><label for="PasswordBox"><h4 style={{ marginLeft: '217px' }}>Parola</h4></label></p>
                            <p style={{ textAlign: 'center' }}><input type="password" onChange={(e) => setPassword(e.target.value)}
                                className="email_parola" name="pass" id="PasswordBox" placeholder="Introduceti Parola" required></input></p>
                        </div>
                         {/* <div className="spacing_label">
                            <p><label for="CPasswordBox"><h4 style={{ marginLeft: '217px' }}>Confirmati Parola</h4></label></p>
                            <p style={{ textAlign: 'center' }}><input type="Cpassword" className="email_parola" name="Cpass" id="CPasswordBox" placeholder="Confirmati Parola" required></input></p>
                        </div>
                        <div className="spacing_label">
                            <p><label for="Name"><h4 style={{ marginLeft: '217px' }}>Nume complet</h4></label></p>
                            <p style={{ textAlign: 'center' }}><input type="name" className="email_parola" name="name" id="NameBox" placeholder="Introduceti Numele" required></input></p>
                        </div> */}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" ><h4>Creaza cont</h4></button>
                        <p><NavLink className='cont' to="/">Autentificare</NavLink></p>
                    </div>
                </form>
            </AuthenticationCard>
        </body >
    );
}