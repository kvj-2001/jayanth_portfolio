import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://github.com/kvj-2001" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/veerajayanth07" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin />
        </a>
        <a href="https://www.hackerrank.com/profile/veerajayanth07" target="_blank" rel="noopener noreferrer" className="icon">
          <FaHackerrank/>
        </a>
        <a href="mailto:veerajayanth07@gmail.com" className="icon">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© 2025 Veera Jayanth K. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
