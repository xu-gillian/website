import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
    return(
        <div className="contact-container" id="contact">
            <div className="contact-title">Contact</div>
            <div className="contact-information-container">
                <div>
                    <div className="contact-information">+1 (647) 528 1092</div>
                    <div className="contact-information">gillianxu09@gmail.com</div>
                    <div className="contact-information">Toronto | Waterloo</div>
                </div>
                <div className="links-container">
                    <a className="links" href="https://www.linkedin.com/in/gillian-xuu/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="links" href="https://github.com/xu-gillian" target="_blank" rel="noreferrer">Github</a>
                    <a className="links" href="https://xu-gillian.github.io/website/Gillian_resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                     </div>
            </div>
            
        </div>
            
    ); 
}

export default Contact;