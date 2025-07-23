import React from "react";
import Lottie from "lottie-react";
import "../../App.css";
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
import Footer from "./../footer/footer";
import animation from './../../assets/Animation.json'
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram } from "react-icons/fa";

// Skill Data
const skills = [
  { name: "Java", img: java },
  { name: "Spring Boot", img: spring },
  { name: "React", img: react },
  { name: "Python", img: python },
  { name: "Flask", img: flask },
  { name: "C", img: clang },
  { name: "C++", img: cplus },
  { name: "HTML", img: html },
  { name: "SQL", img: mysql },
  { name: "CSS", img: css },
  { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MAC OS", img: macos },
  { name: "Windows", img: windows }
];

// Timeline Data
const timelineData = [
    { year: "2024", title: "HCLTech", icon: <FaBriefcase />, description: "Software Engineer focusing on Java and Spring Boot." },
    { year: "2023", title: "B.Tech", icon: <FaGraduationCap />, description: "KKR & KSR Institute of Technology and Sciences" },
    { year: "2019", title: "Intermediate", icon: <FaGraduationCap />, description: "Sree Venkateswara Junior College" },
    { year: "2017", title: "10th Grade", icon: <FaGraduationCap />, description: "Little Flower E.M. School" },
  ];

function About() {
  return (
    <>
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
        <h3>Education & Experience Timeline</h3>
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
      <br/><br/><br/>
      <h3>Skills</h3>
      <div className="skills-container">
      {/* Left: Profile Image */}
      <Lottie animationData={animation} loop={true} style={{ width: 400, height: 400 }} />
      
      {/* Right: Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    </section>
    </>
  );
}

export default About;
