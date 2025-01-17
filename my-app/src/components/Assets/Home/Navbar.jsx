import React from 'react';
import './Navbar.css'; // Assuming you have a specific CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-links">
        <a href="#about" className="Navbar-link">HOME</a>
        <a href="#work" className="Navbar-link">WORK EXPERIENCE</a>
        <a href="#skills" className="Navbar-link">TECHNICAL EXPERIENCE</a>
        <a href="#education" className="Navbar-link">EDUCATION</a>
        <a href="#projects" className="Navbar-link">PROJECTS</a>
        <a href="#contact" className="Navbar-link contact">CONTACT ME</a>
      </div>
    </nav>
  );
};

export default Navbar;
