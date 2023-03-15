import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../assets/css/NavBar.css";


const NavBar = () => {
    const [navColour, setNavColour] = useState(false);
    // const [showNav, setShowNav] = useState(false);

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
        <BrowserRouter>
        <div className={navColour ? 'nav-top active' : 'nav-top'}>
            <div className = "nav-container">
                <Link className="options" to='#experience' smooth>Experience</Link>
                <Link className="options" to='#projects' smooth>Projects</Link>
                <Link className="options" to='#about'smooth>About</Link>
                <Link className="options" to='#contact' smooth>Contact </Link>
                <a className="options" href="https://xu-gillian.github.io/website/Gillian_resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default NavBar;