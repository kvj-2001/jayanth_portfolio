import React from "react";
import "./about.css";
import java from "./../../assets/java1.png";
import python from "./../../assets/python.png";
import clang from "./../../assets/c1.png";
import cplus from "./../../assets/c++.png";
import html from "./../../assets/html.png";
import css from "./../../assets/css.png";
import react from "./../../assets/react1.png";
import js from "./../../assets/js.png";
import spring from "./../../assets/spring.png";
import flask from "./../../assets/flask.png";
import macos from "./../../assets/macos.png";
import windows from "./../../assets/windows.png";
import mysql from "./../../assets/mysql.png";
import profile from "./../../assets/photo.jpg";
import Headers from "./../header/Headers";
import Footer from "./../footer/footer";
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram } from "react-icons/fa";

// Skill Data
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", img: java },
      { name: "Python", img: python },
      { name: "C", img: clang },
      { name: "C++", img: cplus },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "React", img: react },
      { name: "JavaScript", img: js },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", img: spring },
      { name: "Flask", img: flask },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "macOS", img: macos },
      { name: "Windows", img: windows },
    ],
  },
  {
    category: "Databases",
    skills: [{ name: "MySQL", img: mysql }],
  },
];

// Timeline Data
const timelineData = [
    { year: "2017", title: "10th Grade", icon: <FaGraduationCap />, description: "Little Flower E.M. School" },
    { year: "2019", title: "Intermediate", icon: <FaGraduationCap />, description: "Sree Venkateswara Junior College" },
    { year: "2023", title: "B.Tech", icon: <FaGraduationCap />, description: "KKR & KSR Institute of Technology and Sciences" },
    { year: "2024", title: "HCLTech", icon: <FaBriefcase />, description: "Software Engineer focusing on Java and Spring Boot." },
  ];

function About() {
  return (
    <>
    <Headers/>
    <section className="about">
      {/* Profile and Intro */}
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Veera Jayanth K" />
        </div>
        <div className="about-content">
          <h3>Veera Jayanth K</h3>
          <p>
            Welcome to my portfolio! I am a 2023 graduate with a strong passion
            for programming and problem-solving, specializing in both backend
            and frontend development. With a solid foundation in computer
            science and hands-on experience in various projects, I thrive on
            creating efficient and scalable solutions. My expertise spans
            across multiple programming languages and frameworks, allowing me
            to craft seamless user experiences and robust server-side
            functionalities. I am dedicated to continuous learning and staying
            updated with the latest industry trends to deliver high-quality,
            innovative, and reliable software solutions.
          </p>
          <br/>
          <h4>Experience at HCLTech</h4>
          <p>
            Currently working as a Software Engineer at HCLTech, focusing on
            Java and Spring Boot for backend development at Volvo Cars.
          </p>
        </div>
      </div>

      

       {/* Timeline Section */}
       <div className="timeline">
        <h4>Education & Experience Timeline</h4>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <span className="timeline-year">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h4>Skills</h4>
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h5>{category.category}</h5>
            <div className="skill-container">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default About;
