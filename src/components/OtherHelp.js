import "./OtherHelp.css";

export default function OtherHelp({firstNameHandler, lastNameHandler, baseHandler, textHandler, createTodo, firstName, lastName, defBase, base, text}) {

    const base1 = "Baza 1";
    const base2 = "Baza 2";

    return (
        <div>
            <form className="bases_other" onSubmit={(event) => createTodo(event)}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
                </style>
                <label for="fname">Prenume</label>
                <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.." value={firstName} onChange={(event) => firstNameHandler(event)}></input>
                <label for="lname">Nume</label>
                <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.."  value={lastName} onChange={(event) => lastNameHandler(event)}></input>
                <label for="country">Baza sportiva</label>
                <select id="country" name="country" value={base} onChange={(event) => baseHandler(event)}>
                    <option value={defBase}>-- selecteaza optiunea --</option>
                    <option>{base1}</option>
                    <option>{base2}</option>
                </select>
                <label for="subject">Detalii problema</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} value={text} onChange={(event) => textHandler(event)}></textarea>
                <button className="input" id="s_button" type="submit" value="Submit">Trimite</button>
            </form>
        </div>
    );
}