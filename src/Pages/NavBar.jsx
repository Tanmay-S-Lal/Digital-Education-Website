
import React from "react";
import '../Components/Styles/style_navbar.css';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NAVBAR_HOME() {
    return <header className="navbar_header">
        <h1 className="navbar_logo">EDUCATE</h1>
        <nav className="navbar">
            <NavLink to={"/"}>HOME</NavLink>
            <HashLink to={"/#about"} smooth>ABOUT</HashLink>
            <HashLink to={"/#contact"} smooth>CONTACT</HashLink>
        </nav>
    </header>
}
function NAVBAR_QUIZ() {
    return <header className="navbar_header">
        <h1 className="navbar_logo">EDUCATE</h1>
        <nav className="navbar">
            <NavLink to={"/class3/EVS/chapter1/Quiz"}>BACK</NavLink>
        </nav>
    </header>
}
function NAVBAR_ACTIVITY() {
    return <header className="navbar_header">
        <h1 className="navbar_logo">EDUCATE</h1>
        <nav className="navbar">
            <NavLink to={"/class3/EVS/chapter1"}>BACK</NavLink>
        </nav>
    </header>
}

function NAVBAR_SUBJECT() {
    return <header className="navbar_header">
        <h1 className="navbar_logo">EDUCATE</h1>
        <nav className="navbar">
            <NavLink to={"/"}>HOME</NavLink>
            <HashLink to={"/#about"} smooth>ABOUT</HashLink>
            <HashLink to={"/#contact"} smooth>CONTACT</HashLink>
            <NavLink to={"/classes"}>CLASS</NavLink>
        </nav>
    </header>
}
function NAVBAR_CHAPTER() {
    return <header className="navbar_header">
        <h1 className="navbar_logo">EDUCATE</h1>
        <nav className="navbar">
            <NavLink to={"/"}>HOME</NavLink>
            <HashLink to={"/#about"} smooth>ABOUT</HashLink>
            <HashLink to={"/#contact"} smooth>CONTACT</HashLink>
            <NavLink to={"/classes"}>CLASS</NavLink>
            <NavLink to={"/class3/subjects"}>SUBJECTS</NavLink>
        </nav>
    </header>
}

function NAVBAR_CHAPCONTENTS() {
    return <header className="navbar_header">
        <h1 className="navbar_logo">EDUCATE</h1>
        <nav className="navbar">
            <NavLink to={"/"}>HOME</NavLink>
            <HashLink to={"/#about"} smooth>ABOUT</HashLink>
            <HashLink to={"/#contact"} smooth>CONTACT</HashLink>
            <NavLink to={"/class3/EVS/chapter1"}>BACK</NavLink>
            
        </nav>
    </header>
}

export {NAVBAR_HOME, NAVBAR_CHAPTER, NAVBAR_SUBJECT, NAVBAR_CHAPCONTENTS, NAVBAR_QUIZ, NAVBAR_ACTIVITY};
