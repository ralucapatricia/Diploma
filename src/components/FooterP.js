import { useState } from "react";

import "./FooterP.css";
import problem from "../IMG/problem.png";
import solution from "../IMG/solution.png";
import LaundryHelp from "./LaundryHelp";
import OtherHelp from "./OtherHelp";


export default function FooterP() {

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);

    function LaundryProblemHandler() {
        setActive(true);
        setActive1(false);
    }

    function BasesProblemHandler() {
        setActive1(true);
        setActive(false);
    }

    return (
        <div className="footerP">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
            </style>
            <div>
                <div className="title">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
                    </style>
                    <h1><span className="firstLeter">A</span>jutor</h1>
                </div>
            </div>
            <div className="column2" >
                <div className="column">
                    <div>
                        <div className="elements">
                            <h2>Descrierea problemei</h2>
                            <img src={problem} alt='' width="205" height="190" />
                        </div>
                        <div className="row">
                            <button className="button1" onClick={LaundryProblemHandler}>Spalatorie</button>
                            <button className="button1" onClick={BasesProblemHandler}>Baze sportive</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            {active1 && <OtherHelp />}
                        </div>
                        <div>
                            {active && <LaundryHelp />}
                        </div>
                    </div>
                    <div className="vl2">

                    </div>
                </div>
                <img className="image" src={solution} alt='' width="100%" height="600" />
            </div>
        </div>
    );
}