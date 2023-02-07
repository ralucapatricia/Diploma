import "./OtherHelp.css";

export default function OtherHelp() {
    return (
        <div className="bases">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
            </style>
            <label for="fname">Prenume</label>
            <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <label for="lname">Nume</label>
            <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            <label for="country">Baza sportiva</label>
            <select id="country" name="country">
                <option value="australia">Baza 1</option>
                <option value="canada">Baza 2</option>
            </select>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
            <input className="input" type="submit" value="Submit"></input>
        </div>
    );
}