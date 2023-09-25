import React from "react";
import "../Components/Styles/Subjects.css";
import SubjCard from "../Components/MyComponents/SubjCard";
import {NAVBAR_SUBJECT} from "./NavBar.jsx";

//Images
import EVS_img from "../Components/Images/EVS_3.avif";
import Maths_img from "../Components/Images/Maths_1.avif";
import Eng_img from "../Components/Images/English_1.avif";

function Subjects() {
    return(
        <div className="subj_container">
            <NAVBAR_SUBJECT/>
            
            <div className="subj_List">
                <SubjCard key={1} subName={"EVS/ಪರಿಸರ ಅಧ್ಯಯನ"} imgURL={EVS_img} link={"/class3/EVS/chapters"}/>
                <SubjCard key={2} subName={"MATHS/ಗಣಿತ"} imgURL={Maths_img} link={""}/>
                <SubjCard key={3} subName={"ENGLISH/ಆಂಗ್ಲ ಭಾಷೆ"} imgURL={Eng_img} link={""}/>
            </div>
        </div>
    ) 
}
export default Subjects;