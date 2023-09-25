
import React from "react";
import Container from "../Components/MyComponents/Container";
import About from "../Components/MyComponents/About";
import Contacts from "../Components/MyComponents/Contacts";
import { NAVBAR_HOME } from "./NavBar.jsx";
import "../Components/Styles/Home_Page.css";
import ScrollupButton from "../Components/MyComponents/ScrollUpButton";

function Home(){
    
    return (
    <div>
        <NAVBAR_HOME/>
        <Container title="WELCOME TO OUR WEBSITE" description="Click the below button for login or signup for the page"/>
        <About/>
        <Contacts/>
        <ScrollupButton/>
    </div>)
}

export default Home;