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
            I'm passionate Software Engineer driven by the challenge of solving complex problems 
            and building impactful, scalable solutions. Hailing from Guntur, Andhra Pradesh, 
            I hold a degree in Information Technology from KKR & KSR Institute of Technology and Sciences. 
            My journey in tech began there and continues to evolve as I work on backend systems 
            that blend innovation with real-world utility. Now based in Bangalore, I focus on creating 
            robust and user-friendly applications that push boundaries and bring ideas to life. 
            I take pride in writing clean, efficient code and contributing to solutions 
            that truly make a difference.
          </p>
        </div>
      </div>

      <div className="experience-container">
        <h3>Experience</h3>
        <div className="experience-content">
          <div className="experience-item">
            <h4>Software Engineer - HCLTech <span className="experience-dates">(2024 - Present)</span></h4>
            <p>
              Backend Java Developer - HCLTech (Volvo Cars Project) Led backend API development 
              for Volvo Cars global Warranty Claims platform, scaling across 30+ markets and 
              cutting dealer claim errors by 15%. Engineered region-specific authorization logic 
              to maintain 100% compliance, while streamlining deployments via Argo CD, Kubernetes, 
              and Volvo's API Management Portal—reducing release cycles by 30%. 
              Integrated Sentry with Slack alerts to accelerate incident response by 40%, 
              sustaining 99.9%+ API uptime. Designed Grafana dashboards to monitor throughput, 
              latency, and errors, enabling data-driven performance tuning. In an agile 3-member team, 
              helped architect microservices supporting Volvo's direct-to-consumer (D2C) 
              e-commerce strategy. Currently leading a GenAI automation initiative using 
              Python, Azure Blob Storage, and Logic Apps to extract financial data via 
              Teams-integrated bots—targeting a 60% reduction in manual reporting effort.
            </p>
          </div>
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
