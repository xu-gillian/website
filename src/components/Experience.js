import React from "react";
import "../assets/css/ExperienceProject.css";

const Experience = () => {
    return (
        <div className="container" id="experience">
            <div className = "new-section">Experience</div>
            <div className="experience-container">
                <div className="logo spotwork-image"></div>
                <div className="experience-text-container">
                    <span className="text-main">Mobile Developer</span>
                    <div>
                        <a className="text-name-company" href="https://spotwork.co/" target= "_blank" rel="noreferrer">Spotwork</a>
                        <span className="experience-text-date">Summer 2022</span>
                    </div>
                    <span className="text-techstack">Flutter, Dart, Firebase</span>
                    <ul>
                        <li>Developed end-to-end user onboarding flow for US expansion</li>
                        <li>Created new submission flow using Flutter and Dart for contractors to submit ID and equipment verification</li>
                        <li>Utilized Firebase to store and query user, job posting, and employer data</li>
                    </ul>
                </div>
            </div>
            
            <div className="section-line"></div>

            <div className="experience-container">
                <div className="logo ma-image"></div>
                <div className="experience-text-container">
                    <span className="text-main">JR HTML Developer</span>
                    <div>
                        <a className="text-name-company" href="https://www.mortgageautomator.com/" target= "_blank" rel="noreferrer">Mortgage Automator Inc</a>
                        <span className="experience-text-date">Fall 2021</span>
                    </div>
                    <span className="text-techstack">HTML, CSS</span>
                    <ul>
                        <li>Coded Structures for 10+ documentation forms and input custom variable fields</li>
                        <li>Conducted tests to identify errors, debugged code to ensure documents fully met client requirements</li>
                    </ul>
                </div>
            </div>

            <div className="section-line"></div>

            <div className="experience-container">
                <div className="logo felicity-image"></div>
                <div className="experience-text-container">
                    <span className="text-main">Frontend Developer</span>
                    <div>
                        <a className="text-name-company" href="https://www.felicityapp.org/" target= "_blank" rel="noreferrer">Felicity</a>
                        <span className="experience-text-date">Summer 2021</span>
                    </div>
                    <span className="text-techstack">Flutter, Dart</span>
                    <ul>
                        <li>Deveoped UI for a productivity assessment questionnaire consisting of a sequence of timed questions</li>
                        <li>Designed and developed a customizable pomodoro timer</li>
                        <li>Tested cross-platform functionality using Android Emulator to ensure compatibility</li>
                    </ul>
                </div>
            </div>

            <div className="section-line"></div>
        </div>
    );
}

export default Experience; 