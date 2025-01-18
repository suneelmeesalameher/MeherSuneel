import React from 'react';
import './Footer.css';
import githubIcon from '../Icons/github.png'; // Adjust the path as necessary
import linkedinIcon from '../Icons/linkedin.png'; // Adjust the path as necessary

export const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/suneelmeesalameher"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
      >
        <img src={githubIcon} alt="GitHub" className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/meher-suneel-meesala"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
      </a>
    </footer>
  );
};
