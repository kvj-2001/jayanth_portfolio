import React, { useRef, useState, useEffect } from "react";
import Hero from "./components/main/main";
import About from "./components/pages/about";
import Projects from "./components/pages/project";
import Contact from "./components/pages/contact";
import "./App.css"; // global theme + layout styles
import Footer from "./components/footer/footer";

function App() {
  // Theme state (light / dark)
  const [theme, setTheme] = useState("light");

  // Section references for scrollTo
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Apply theme to HTML element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle between light and dark themes
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="main-wrapper">
      {/* ---------------- Header ----------------- */}
      <header className="header">
        <div className="logo">JAYANTH</div>
        <nav className="nav">
          <button onClick={() => scrollToSection(heroRef)}>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </nav>
      </header>

      {/* ---------------- Sections ---------------- */}
      <main>
        <section ref={heroRef} id="hero">
          <Hero />
        </section>

        <section ref={aboutRef} id="about">
          <About />
        </section>

        <section ref={projectsRef} id="projects">
          <Projects />
        </section>

        <section ref={contactRef} id="contact">
          
        </section>
        {/* ---------------- Theme Toggle Button ---------------- */}
      {/* <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
