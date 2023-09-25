import React from "react";
import { NavLink } from "react-router-dom";

function SubjCard(props) {
    
    return(
        <div className="subj_Card">
            <img className="subj_Image" src={props.imgURL} alt={""+props.subName+" Image"} />
            <p className="subjName">{props.subName}</p>
            <NavLink to={props.link}><button className="subjButton">LEARN</button></NavLink>
        </div>
    )
}
export default SubjCard;