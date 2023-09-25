import React from "react";
import { useNavigate } from "react-router-dom";

function ClassCard(Class) {

    // Chapter Navigation Codes
    const navigate = useNavigate();

    const goToClass = () => navigate(Class.link);

    var color1 = Class.color1;
    var color2 = Class.color2;
    return(
        <div className="classCard" style={{background: `linear-gradient(to right bottom,${color1},${color2})`}}>
            <h2 className="class_heading">🎓 Class {Class.id}</h2>
            <p className="classInfo">
                {Class.info}
            </p>
            <button className="buttonRound" onClick={goToClass}>LEARN MORE</button>
        </div>
    )
}

export default ClassCard;