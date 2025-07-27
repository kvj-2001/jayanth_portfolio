import React from "react";
import "../../App.css";
import Lottie from "lottie-react";
import workAnimation from './../../assets/Animation2.json';
import resumeFile from './../../assets/Veera_Jayanth_K_Resume.pdf';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Veera_Jayanth_K_Resume.pdf";
    link.click();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3 className="name">
            I'm, <span className="descriptionName">Veera Jayanth K</span>
          </h3>
          <p className="description">
            Software Engineer with 2+ years of experience in backend development, specializing in Java, Spring Boot, and RESTful APIs. I focus on building scalable, efficient systems with hands-on experience in microservices, API design, and YAML-based configurations. Passionate about clean architecture and writing maintainable code.
          </p>
          <div className="button-container">
            <button className="btn download-btn" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <Lottie
            animationData={workAnimation}
            loop
            autoPlay
            style={{ width: "100%", height: "auto", maxWidth: "500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
