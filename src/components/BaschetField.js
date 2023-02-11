import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import "./BaschetField.css";
import baschet from "../IMG/baschet.png";
import ScheduleBase1 from "./ScheduleBase1";
import ScheduleBase2 from "./ScheduleBase2";

export default function BaschetField() {

    const [calDate, setCalDate] = useState(new Date())
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);

    function Base1Handler() {
        setActive(true);
        setActive1(false);
    }

    function Base2Handler() {
        setActive1(true);
        setActive(false);
    }

    function onChange(calDate) {
        setCalDate(calDate)
    }
    return (
        <div className="text_baschet">
            <div className='container'>
                <img src={baschet} alt='' width="100%" height="900" />
                <button className="btn button" onClick={handleClick}>Rezervă acum</button>
            </div>
            <div ref={ref}>

            </div>
            <div>
                <div className="result-calendar row2">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
                    </style>
                    <Calendar onChange={onChange} value={calDate} />
                    <div>
                        <div>
                            {active && <ScheduleBase1 />}
                        </div>
                        <div>
                            {active1 && <ScheduleBase2 />}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="button1" onClick={Base1Handler}>Baza 1</button>
                    <button className="button1" onClick={Base2Handler}>Baza 2</button>
                </div>
            </div>
        </div>
    );
}