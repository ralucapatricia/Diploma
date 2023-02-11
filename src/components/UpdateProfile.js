import React from 'react';

const UpdateProfile = ({ todo, toggleComplete }) => {
    return (
        <div className="form_date">
            <div className="profle_row">
                <div>
                    <p><label>Nume:</label></p>
                    <input className="date_user" required onChange={firstNameHandler} value={firstName}></input>
                </div>
                <div>
                    <p><label>Prenume:</label></p>
                    <input className="date_user" required onChange={lastNameHandler} value={lastName}></input>
                </div>
            </div>
            <div className="profle_row">
                <div>
                    <p><label>Facultate:</label></p>
                    <input className="date_user" required onChange={schoolHandler} value={school}></input>
                </div>
                <div>
                    <p><label>Camin:</label></p>
                    <input className="date_user" required onChange={dormHandler} value={dorm}></input>
                </div>
            </div>
            <button type="submit" className="button_user">Salvare modificari</button>
        </div>
    );
};

export default UpdateProfile;