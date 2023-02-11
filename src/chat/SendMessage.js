import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { UserAuth } from "../contexts/AuthContext";

import "./SendMessage.css";

const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState('');
    const { user } = UserAuth();

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            uid,
            timestamp: serverTimestamp(),
            email_chat: user.email
        })
        setInput('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <form onSubmit={sendMessage} >
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text'
                placeholder='Message'
                className="message_chat"
            />
            <div className="btnContainer_chat">
                <button className="btnPrimary_chat" type='submit'>
                    <span className="bold_chat">Trimite mesaj</span>
                </button>
            </div>
        </form>
    );
};

export default SendMessage;