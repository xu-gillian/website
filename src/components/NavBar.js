import React, { useState } from "react";
import "../assets/css/NavBar.css";


const NavBar = () => {
    const [navColour, setNavColour] = useState(false);

    // change nav colour when scrolling
    const changeNavColour = () => {
        if (window.scrollY >= 200) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    }
    window.addEventListener('scroll', changeNavColour);

    return (
        <div className={navColour ? 'nav-top active' : 'nav-top'}>
            <div className = "nav-container">
                <button className="options">Experience</button>
                <button className="options">Projects</button>
                <button className="options">About</button>
                <button className="options">Contact </button>
                <button className="options" >Resume</button>
            </div>
        </div>
    );
}

export default NavBar;