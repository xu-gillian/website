import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../assets/css/MainDisplay.css";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";


const MainDisplay = () => {
    const attributes = [
        " Software Developer",
        " Computer Science Student",
        " Student Athlete",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex === 2 ? prevIndex = 0 : prevIndex += 1)
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <NavBar />
            <div className="wrapper">
                <div className="test">
                <p className="intro-name-text">
                    <span>Hi! I'm </span>
                    <span className="name">Gillian Xu, </span>
                </p>
                <span className="intro-attribute-text">a &nbsp;
                    <span className="slideUp">{attributes[index]}</span>
                </span>
                </div>
                
            </div>
            <Experience />
            <Projects />
            <div className = "filler"></div>
            <About />
            <Contact />
        </div>  
    );

}

export default MainDisplay;
