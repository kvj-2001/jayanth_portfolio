import React from "react";
import "./Project.css";
import Headers from "./../header/Headers";
import Footer from "../footer/footer";
import ams from "./../../assets/AMS.jpeg";
import sbota from "./../../assets/s-bota.jpg";
import pcyp from "./../../assets/PCYP.png";

const Project = () => {
  // Array of project details
  const projects = [
    {
      title: "Airport Management System",
      technology: "Java | SQL | Spring Boot",
      description:
        "Built using Spring Boot with SQL database to manage CRUD operations.",
      description1:
        "Handles the associations between Hangers, Pilots and Planes",
      reference: "https://github.com/kvj-2001/AirportManagementSystem",
      reference1: "#",
      image: ams,
    },
    {
      title: "Prognosis of Crop Yield Using M. L. Techniques",
      technology: "Python | HTML | CSS | JS | Flask API",
      description: "Designed to Predict the crop yield based on the inputs like rainfall, soil information, and crop type",
      description1: "Applied the Random Forest Algorithm to train the model on a dataset of more than 15,000 samples, optimizing predictive accuracy through hyper-parameter tuning and predicts crop yield with 92% accuracy which can help many farmers.",
      reference: "https://github.com/kvj-2001/Prognosis-of-Crop-Yield",
      reference1: "https://www.ijraset.com/best-journal/prognosis-of-crop-yield-using-machine-learning-techniques",
      image: pcyp,
    },
    {
      title: "S - BOTA",
      technology: "IOT | Arduino",
      description:
        "This project is used for knowing the quality of the water...",
      description1: "Smart Water Bottle is an IOT based project. In this project we use an app for displaying the amount of TDS and pH values of the water and suggests the quality of drinking water as well as to improve the quality of the water if necessary.",
      reference: "#",
      reference1: "#",
      image: sbota,
    }
  ];

  return (
    <>
    <Headers/>
    <div className="project-div">
    <div className="project-main-container">
      <h2 className="project-heading">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.technology}
              </p>
              <p className="project-description">{project.description}</p>
              {project.description1 && (
                <p className="project-description1">{project.description1}</p>
              )}
              <div className="project-buttons">
              <a
                href={project.reference}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
              <a
                href={project.reference1}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                More Details
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Project;