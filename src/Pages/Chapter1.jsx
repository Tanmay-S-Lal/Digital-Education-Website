import React from 'react';
import {NAVBAR_CHAPTER} from "./NavBar.jsx";
import Chapcontpage from '../Components/MyComponents/Chapcontpage.jsx';
import "../Components/Styles/Chapter_content.css"

function Chapter1(){
    return <div>
        <NAVBAR_CHAPTER/>
        <Chapcontpage/>   
    </div>
}

export default Chapter1;