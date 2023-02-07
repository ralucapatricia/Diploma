import "./LaundryHelp.css";

export default function LaundryHelp() {
    return (
        <div className="laundry">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
            </style>
            <label for="fname">Prenume</label>
            <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <label for="lname">Nume</label>
            <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            <label for="country">Caminul</label>
            <select id="country" name="country">
                <option value="19C">19C</option>
                <option value="20C">20C</option>
                <option value="21C">21C</option>
                <option value="22C">22C</option>
                <option value="1C">1C</option>
                <option value="2C">2C</option>
                <option value="4C">4C</option>
                <option value="7C">7C</option>
                <option value="1 MV">1 MV</option>
                <option value="2 MV">2 MV</option>
                <option value="8C">8C</option>
                <option value="9C">9C</option>
                <option value="11C">11C</option>
                <option value="14C">14C</option>
            </select>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
            <input className="input" type="submit" value="Submit"></input>
        </div>
    );
}

