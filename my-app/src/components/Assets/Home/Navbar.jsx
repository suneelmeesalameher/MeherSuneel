import React from 'react';
import './Navbar.css'; // Assuming you have a specific CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-links">
        <a href="#about" className="Navbar-link">About Me</a>
        <a href="#work" className="Navbar-link">Work Experience</a>
        <a href="#skills" className="Navbar-link">Technical Skills</a>
        <a href="#education" className="Navbar-link">Education</a>
        <a href="#projects" className="Navbar-link">Projects</a>
        <a href="#contact" className="Navbar-link">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
