import React from 'react';
import {auth} from '../firebase'

const Reservations = ({ reservation }) => {
  return (
      <div>
        <p className={`${reservation.uid === auth.currentUser.uid ? "email_send" : "email_received"}`}>{reservation.email_chat}</p>
        <div className={`${reservation.uid === auth.currentUser.uid ? "send" : "received"}`}>
        <p>{reservation.text}</p>
        </div>
      </div>
  );
};

export default Reservations;