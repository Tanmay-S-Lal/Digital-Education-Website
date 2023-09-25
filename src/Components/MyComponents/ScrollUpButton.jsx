import React from "react";
import { useState } from "react";
import {BsArrowUpShort} from 'react-icons/bs'
import "../Styles/style_ScrollUpButton.css"

function ScrollupButton() {
    const [visible,setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300)
            setVisible(true);
        else
            setVisible(false);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    window.addEventListener('scroll',toggleVisible);

    return(
        <button className="scrollTopButton" onClick={scrollToTop} style={{display: visible ? 'inline':'none'}}>
            <BsArrowUpShort color="white" size={"30px"} />
        </button>
    )
}

export default ScrollupButton;