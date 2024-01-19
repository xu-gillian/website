import React from "react";
import "../assets/css/ExperienceProject.css";

const Experience = () => {
    return (
        <div className="container" id="experience">
            <div className = "new-section">Experience</div>
            <div className="experience-container">
                <div className="logo dibbly-image"></div>
                <div className="experience-text-container">
                    <span className="text-main">Fullstack Developer Intern</span>
                    <div>
                        <a className="text-name-company" href="https://dibbly.com/" target= "_blank" rel="noreferrer">Dibbly</a>
                        <span className="experience-text-date">Fall 2023</span>
                    </div>
                    <span className="text-techstack">Ruby on Rails, SQL, jQuery, Stimulus, Sidekiq</span>
                    <ul>
                        <li>Spearheaded the creation of data filter system for admin users to export data as CSVs, reducing manual review time by 92%</li>
                        <li>Implemented RESTful API endpoints using Ruby on Rails, jQuery and SQL queries to retrieve the filtered data</li>
                        <li>Developed discounts feature, driving a surge of 10K+ additional monthly orders with exclusive codes for qualifying amounts</li>
                        <li>Empowered 30K+ users to tailor their experience by integrating an AI consent feature, using Ruby on Rails and Stimulus.js</li>
                        <li>Achieved a 73% reduction in page load times by implementing eager loading, pagination, and indexing strategies</li>
                    </ul>
                </div>
            </div>
            
            <div className="section-line"></div>

            <div className="experience-container">
                <div className="logo agilmatic-image"></div>
                <div className="experience-text-container">
                    <span className="text-main">Software Engineering Intern</span>
                    <div>
                        <a className="text-name-company" href="https://www.wicwac.com/fr/services/repair-installation/electrical/agilmatic-electric-ltd-2338" target= "_blank" rel="noreferrer">Agilmatic Electric Ltd.</a>
                        <span className="experience-text-date">Summer 2023</span>
                    </div>
                    <span className="text-techstack">Python, FastAPI, Google Cloud API, OpenAI</span>
                    <ul>
                        <li>Developed a virtual assistant to handle requests using DialogFlow, facilitating order processes for 100K+ monthly customers</li>
                        <li>Pioneered the usage of OpenAI LLMs and FastAPI to elevate response quality and fostering more human-like conversations
with 80% response accuracy, leveraging prompt engineering techniques</li>
                        <li>Implemented automated printing system using Python for 2.5K+ monthly order details, reducing operational time</li>
                        <li>Achieved speech recognition with 84% accuracy in meeting customer order needs by integrating Google Cloud APIs</li>
                    </ul>
                </div>
            </div>
            
            <div className="section-line"></div>

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
        </div>
    );
}

export default Experience; 