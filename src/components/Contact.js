import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
    return(
        <div className="contact-container" id="contact">
            <div className="contact-title">Contact</div>
            <div className="contact-information">+1 (647) 528 1092</div>
            <a className="links" href="https://www.linkedin.com/in/gillian-xuu/" target="_blank" rel="noreferrer">LinkedIn</a>
            <div className="contact-information">gillianxu09@gmail.com</div>
            <a className="links" href="https://github.com/xu-gillian" target="_blank" rel="noreferrer">Github</a>
            <div className="contact-information">Toronto | Waterloo</div>
        </div>
    ); 
}

export default Contact;