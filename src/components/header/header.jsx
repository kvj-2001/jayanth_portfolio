import React, { useState } from "react";
import "./Header.css";

const Header = ({ scrollToSection, heroRef, aboutRef, projectsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">JAYANTH</div>

      {/* Desktop Nav */}
      <nav className="nav desktop-nav">
        <button onClick={() => scrollToSection(heroRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      {/* Mobile Toggle Icon */}
      <div className="mobile-toggle" onClick={toggleMenu}>
        <span className="material-icons">{isMenuOpen ? "close" : "menu"}</span>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="nav mobile-nav">
          <button onClick={() => { scrollToSection(heroRef); closeMenu(); }}>Home</button>
          <button onClick={() => { scrollToSection(aboutRef); closeMenu(); }}>About</button>
          <button onClick={() => { scrollToSection(projectsRef); closeMenu(); }}>Projects</button>
          <button onClick={() => { scrollToSection(contactRef); closeMenu(); }}>Contact</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
