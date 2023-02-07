import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword} from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

import "./LogIn.css";
import AuthenticationCard from "./AuthenticationCard";
import logo from "../IMG/logo.png";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    //const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        // if (user) navigate("/dashboard");
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
                        <p style={{ textAlign: 'center', marginBottom: '30px' }}>< input className="email_parola" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} name="email" id="EmailBox" placeholder="Introduceti email-ul" required></input></p>

                    </div>
                    <div className="spacing_label">
                        <p><label for="PasswordBox"><h4 style={{ marginLeft: '217px' }}>Parola</h4></label></p>
                        <p style={{ textAlign: 'center' }}><input type="password" className="email_parola" value={password}
                            onChange={(e) => setPassword(e.target.value)} name="pass" id="PasswordBox" placeholder="Introduceti Parola" required></input></p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={() => signInWithEmailAndPassword(email, password)}><h4>Autentificare</h4></button>
                        <p><NavLink className='cont' to="/CreazaCont">Creaza cont</NavLink></p>
                    </div>
                </div>
            </AuthenticationCard>
        </body>
    );
}

