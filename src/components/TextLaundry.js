import { useState, useEffect, useContext } from "react";
import { NumberContext } from "../store/number-context";

import "./TextLaundry.css";
import Nested from "./Nested";

export default function TextLaundry() {

    const [number, setNumber] = useState(1);
    const [number1, setNumber1] = useState(1);
    const [text, setText] = useState("");
    const [empty, setEmpty] = useState(false);

    const numberCtx = useContext(NumberContext);

    useEffect(() => {
        numberCtx.getNumber(number);
    }, [number]);


    function incrementHandler() {
        setNumber((currNumber) => currNumber + 1);
    }

    function decrementHandler() {
        setNumber((currNumber) => currNumber - 1);
    }

    console.log("Render");

    useEffect(() => {
        console.log("Render");
    }, [number, number1]);

    const conditional = <div className="conditional">numar dorit</div>;
    let error = <div>swge</div>;
    let errorEmpty= <div style={{color:"red"}}>Empty text field!</div>

    if (number < 0) {
        setNumber(0);
        error = <div className="erorr">Esti prost!</div>;
    }
    // if(number % 5 === 0){
    //     return conditional;
    // }

    function textHandler(event) {
        setText((currentText) => currentText = event.target.value);
        setEmpty(false);
    }

    function submitHandler(event) {
        event.preventDefault();
        setText("");
        if(text.length === 0)
        {
            setEmpty(true);
        }
    }

    return (
        <div className="text_laundry">
            Laundry
            <div className="card">
                Start
                <div className="buttons">
                    <button className="button" onClick={incrementHandler}>
                        Increment
                    </button>
                    <div className={`${number % 5 === 0 ? "numberDesired" : "number"}`}>
                        {number}
                    </div>
                    <button className="button" onClick={decrementHandler}>
                        Decrement
                    </button>
                    <button className="button" onClick={() => setNumber1((currNumber) => currNumber * 2)}>
                        Multiply
                    </button>
                    <div className={`${number % 5 === 0 ? "numberDesired" : "number"}`}>
                        {number1}
                    </div>
                </div>
            </div>
            {number % 5 === 0 && conditional}
            {error}

            <form onSubmit={submitHandler} >
                <input  value={text} onChange={textHandler} className={`${text.length === 0 ? "red" : ""}`}/>
                <button type="submit">Add</button>
            </form>
            {empty && errorEmpty}
            <Nested text={text} number={number} number1={number1} />
        </div>
    );
}