import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">JAYANTH</div>

      {/* Desktop Nav */}
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Dropdown Navigation */}
      <nav className={`nav-mobile ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Headers;
