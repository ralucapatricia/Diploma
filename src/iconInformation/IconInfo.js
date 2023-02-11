import React, { useState } from 'react';

import "./IconInfo.css";
import teamInfo from "../IMG/teamInfo.jpg"

export default function IconInfo() {
    const [hover, setHover] = useState(false);
    const HoverData = "Ai face sport, dar nu ai echipă? Acum poți să îți creezi singur o echipă!";

    const onHover = (e) => {
        e.preventDefault();
        setHover(true);
        console.log("hovered");
    };

    const onHoverOver = (e) => {
        e.preventDefault();
        setHover(false);
    };

    return (
        <div>
            {hover && <p className={hover}>{HoverData} </p>}
            <img
                onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}
                alt=""
                src={teamInfo}
                className="team_info"
            />
        </div>
    );
}