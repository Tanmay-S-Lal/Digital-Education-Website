import React from "react";
import "../Components/Styles/Classes.css";
import classList from "../Components/jsons/classListJson.json";
import ClassCard from "../Components/MyComponents/ClassCard";
import {NAVBAR_HOME} from "./NavBar.jsx";


function Classes() {
    return(
        <div className="class_container">
            <NAVBAR_HOME/>
        
            <div className="classList">
                {classList.map((Class) => <ClassCard key = {Class.id} id = {Class.id} info = {Class.info} color1 = {Class.color1} color2 = {Class.color2} link={Class.link} />)}
            </div>
        
        </div>
    )
}
export default Classes;