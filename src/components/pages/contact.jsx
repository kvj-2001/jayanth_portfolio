import React from "react";
import './contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import Headers from './../header/Headers'

const Contact = () => {
  const contactData = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      name: "Email",
      link: "mailto:veerajayanth07@gmail.com",
      label: "veerajayanth07@gmail.com",
    },
    {
      icon: <FaLinkedin className="contact-icon" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/veerajayanth07/",
      label: "linkedin.com/in/veerajayanth07",
    },
    {
      icon: <FaGithub className="contact-icon" />,
      name: "GitHub",
      link: "https://github.com/kvj-2001",
      label: "github.com/kvj-2001",
    },
    {
      icon: <FaHackerrank className="contact-icon" />,
      name: "HackerRank",
      link: "https://www.hackerrank.com/veerajayanth07",
      label: "hackerrank.com/veerajayanth07",
    },
  ];

  return (
    <>
    <Headers/>
    <div className="contact-div">
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-content">
        {contactData.map((item, index) => (
          <div key={index} className="contact-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
              <span className="contact-label">{item.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
