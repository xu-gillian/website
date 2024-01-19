import React from "react";
import "../assets/css/About.css";

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className = "about-section">About Me</div>
            <div className="profile-container">
                <div className="profile-image"></div>
                <div className="profile-text">
                    <p className="removeSpacing">I am an aspiring program developer who is currently studying at Waterloo for Computer Science.</p>
                    <p className="removeSpacing">My experience lies in using React, Typescript, Bootstrap, SQL, Node.js, Express.js and C++.</p>
                    <p className="removeSpacing">Having used multiple media platforms, played multiple games, I started thinking about how each of these intricate applications worked. Now that I am studying Computer Science, I hope that through the challenges I will encounter, I hope to be able to develop these applications myself.</p>
                    <p className="removeSpacing">In my free time, I enjoy playing frisbee, playing the piano, and spending time with friends. I would like to spend this year developing more side projects, which includes trying to create my own game! Currently, I am doing an exchange in Norway, and one of my goals so to travel around Europe this term. :) </p>
                    <p className="removeSpacing">Feel free to check out my resume below.</p>
                </div>
            </div>
        </div>
    ); 
}

export default About;