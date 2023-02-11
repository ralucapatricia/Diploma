import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { UserAuth } from '../contexts/AuthContext';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


import "./TextRegister.css";
import AuthenticationCard from "./AuthenticationCard";
import CardMessage from './CardMessage';
import logo from "../IMG/logo.png";
import LoadingPage from './LoadingPage';

export default function Register() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");
    const [messagePass, setMessagePass] = useState("");
    const [messagePass2, setMessagePass2] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [error, setError] = useState('')
    const [errEmail, setErrEmail] = useState(false)
    const [errPass, setErrPass] = useState(false)
    const [errConfirmPass, setErrConfirmPass] = useState(false)
    const { createUser } = UserAuth();
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const regEx = "@student.upt.ro";
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).*$/

    const submitHandler = async (event) => {
        event.preventDefault();
        setIsAuthenticating(true);
        try {
            if (email.search(regEx) < 0) {
                setMessage("Este nevoie de email de student! (prenume.nume@student.upt.ro)");
                setError("Nu s-a putut crea cont!");
                setErrEmail(true);
            }
            else if (password !== confirmPassword) {
                setConfirmError("Parolele nu se potrivesc!");
                setError("Nu s-a putut crea cont!");
                setErrConfirmPass(true);
            }
            else if (!regExPass.test(password)) {
                setMessagePass("Parola este invalida! Trebuie sa contina cel putin 6 caractere, o cifra, ");
                setMessagePass2("o litera mica, o litera mare si un carcater special.");
                setError("Nu s-a putut crea cont!");
                setErrPass(true);
            }
            else {
                await createUser(email, password);
                navigate("/HomePage")
            }
        } catch (error) {
            setError("Nu s-a putut crea cont! Acest email a fost folosit deja!");
        }
        setIsAuthenticating(false);
    }


    function setEmailHandler(event) {
        setEmail(event.target.value);
        setErrEmail(false);

    }

    function setPasswordHandler(event) {
        setPassword(event.target.value)
        setErrPass(false);
    }

    function setConfirmPasswordHandler(event) {
        setConfirmPassword(event.target.value)
        setErrConfirmPass(false);
    }

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    let eye = <AiFillEyeInvisible className='eye' onClick={togglePassword} />
    if (passwordShown) {
        eye = <AiFillEye className='eye' onClick={togglePassword} />
    }

    if (isAuthenticating) {
        return (
            <LoadingPage />
        )
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
                            <label for="EmailBox"><h4 style={{ marginLeft: '270px' }}>Email</h4></label>
                            <p style={{ textAlign: 'center' }}>< input className="email_parola" type="email" name="email" id="EmailBox" onChange={setEmailHandler}
                                placeholder="Introduceti email-ul" required></input></p>
                            <p style={{ textAlign: 'center' }}>{errEmail && <CardMessage>{message} </CardMessage>}</p>
                        </div>
                        <div className="spacing_label">
                            <p><label for="PasswordBox"><h4 style={{ marginLeft: '270px' }}>Parola</h4></label></p>
                            <p style={{ textAlign: 'center', marginLeft: '20px' }}><input type={passwordShown ? "text" : "password"} onChange={setPasswordHandler}
                                className="email_parola" name="pass" id="PasswordBox" placeholder="Introduceti Parola" required></input> {eye}</p>

                            <p style={{ textAlign: 'center' }}>{errPass && <CardMessage><p>{messagePass}</p><p>{messagePass2}</p></CardMessage>}</p>
                            <p><label for="ConfirmPasswordBox"><h4 style={{ marginLeft: '270px' }}>Confirmati Parola</h4></label></p>
                            <p style={{ textAlign: 'center', marginLeft: '20px' }}><input type={passwordShown ? "text" : "password"} onChange={setConfirmPasswordHandler}
                                className="email_parola" name="ConfirmPass" id="ConfirmPasswordBox" placeholder="Confirmati Parola" required></input>{eye}</p>
                            <p style={{ textAlign: 'center' }}>{errConfirmPass && <CardMessage>{confirmError}</CardMessage>}</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className='button_style' type="submit" ><h4>Creează cont</h4></button>
                        <p><NavLink className='cont' to="/">Ai deja cont?</NavLink></p>
                        {(errEmail || errPass || errConfirmPass || error) && <CardMessage>{error}</CardMessage>}
                    </div>
                </form>
            </AuthenticationCard>
        </body >
    );
}