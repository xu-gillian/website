import React from "react";
import "../assets/css/ExperienceProject.css";

const Projects = () => {
    return(
        <div className="container" id="projects">
            <div className = "new-section">Projects</div>
            <div className="section-line"></div>
            <div className="experience-container">
                <div className="logo consano-image" to="https://devpost.com/software/harmonyy-x4k9dq"></div>
                <div className="experience-text-container">
                    <a className="text-name-project" href="https://devpost.com/software/consano" target="_blank" rel="noreferrer">Consano</a>
                    <span>Voice-based wellness update web interface for hospital patients.</span>
                    <span className="text-techstack">React, Express.js, Cohere.ai API</span>
                    <ul>
                        <li>Predicted changes in patient health based on natural language statements using NLP API Cohere.ai to train ML model</li>
                        <li>Created frontend with a voice recognition system using React</li>
                        <li>Designed RESTful APIs to get patient’s health updates and post results to patient’s portal with Express</li>
                    </ul>
                </div>
            </div>

            <div className="section-line"></div>

            <div className="experience-container">
                <div className="logo felicity-image"></div>
                <div className="experience-text-container">
                    <a className="text-name-project" href="https://www.felicityapp.org/" target="_blank" rel="noreferrer">Felicity</a>
                    <span>Productivity app that diagnoses user habits and provides integrated tools (e.g. to-do lists, calendars, etc.)</span>
                    <span className="text-techstack">Flutter, Dart, Firebase</span>
                    <ul>
                        <li>Deveoped UI for a productivity assessment questionnaire consisting of a sequence of timed questions</li>
                        <li>Designed and developed a customizable pomodoro timer</li>
                        <li>Tested cross-platform functionality using Android Emulator to ensure compatibility</li>
                    </ul>
                </div>
            </div>
                
            <div className="section-line"></div>

            <div className="experience-container">
                <div className="harmonyy-image"></div>
                <div className="experience-text-container">
                    <a className="text-name-project" href="https://devpost.com/software/harmonyy-x4k9dq" target="_blank" rel="noreferrer">Harmonyy</a>
                    <span>Real-time messaging and interactive gaming platform.</span>
                    <span className="text-techstack">HTML, CSS, JavaScript, MySQL, Node.js</span>
                    <ul>
                        <li>Developed game logic using JavaScript, allowing users to draw a word on a canvas before prompting others to input a guess</li>
                        <li>Created real-time messaging system using Node.js</li>
                        <li>Created login system uding MySQL and store authentication tokens</li>
                    </ul>
                </div>
            </div>

            <div className="section-line"></div>

            <div className="experience-container">
                <div className="logo yumyum-image"></div>
                <div className="experience-text-container">
                    <a className="text-name-project" href="https://xu-gillian.github.io/YuMyUm/" target="_blank" rel="noreferrer">Harmonyy</a>
                    <span>Web interface for users to select and total menu items</span>
                    <span className="text-techstack">React, Javascript</span>
                    <ul>
                        <li>Designed a menu allowing users to add desired quantity of items to a cart</li>
                        <li>Created modal overlays to display order details and allow item adjustments</li>
                        <li>Used hooks to update the state of the cart upon the addition and removal of items</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Projects;