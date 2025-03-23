import React from "react";
import "./main.css";
import work from './../../assets/work.jpg'
import resumeFile from './../../assets/Veera_Jayanth_K_Resume.pdf'

const Hero = () => {
  // Handle Resume Preview
  const handlePreview = () => {
    window.open(resumeFile, "_blank");
  };

  // Handle Resume Download
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
          <h1 className="name">Hi,</h1>
          <h1 className="name">I am Veera Jayanth K</h1>
          <p className="description">
            I'm a Full Stack Developer and an enthusiast of learning new skills
            and applying them to solve Industry Relevant Problems.
          </p>
          <div className="button-container">
            <button className="btn preview-btn" onClick={handlePreview}>
              Preview Resume
            </button>
            <button className="btn download-btn" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={work} alt="Veera Jayanth K" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
