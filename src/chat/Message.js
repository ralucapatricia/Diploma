import React from 'react';
import {auth} from '../firebase'
import "./Message.css";


const Message = ({ message }) => {
  return (
    <div className='message'>
      <div>
        <p className={`${message.uid === auth.currentUser.uid ? "email_send" : "email_received"}`}>{message.email_chat}</p>
        <div className={`${message.uid === auth.currentUser.uid ? "send" : "received"}`}>
        <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;