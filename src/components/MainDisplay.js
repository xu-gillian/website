import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../assets/css/MainDisplay.css";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import RightSide from "./RightSide";
import DinoGame from "./dino-game/DinoGame";
import LeftSide from "./LeftSide";


const MainDisplay = () => {
    const attributes = [
        " Software Developer",
        " Computer Science Student",
        " Frisbee Fanatic",
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
            <RightSide />
            {/* <LeftSide /> */}
            <NavBar />
            <div className="wrapper">
                <div className="into-text">
                    <p className="intro-name-text">
                        <span>Hi! I'm </span>
                        <span className="name">Gillian Xu, </span>
                    </p>
                    <p className="intro-attribute-text">a &nbsp;
                        <span className="slideUp">{attributes[index]}</span>
                    </p>
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
