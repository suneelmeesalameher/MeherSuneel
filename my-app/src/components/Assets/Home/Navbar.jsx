import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbarHeight = document.querySelector('.Navbar').offsetHeight;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + navbarHeight;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="Navbar">
      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} color="#fff" /> : <FiMenu size={30} color="#fff" />}
      </div>

      {/* Navbar links */}
      <div className={`Navbar-links ${menuOpen ? 'open' : ''}`}>
        <a
          href="#about"
          className={`Navbar-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </a>
        <a
          href="#work"
          className={`Navbar-link ${activeSection === 'work' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          WORK EXPERIENCE
        </a>
        <a
          href="#skills"
          className={`Navbar-link ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          TECHNICAL EXPERIENCE
        </a>
        <a
          href="#projects"
          className={`Navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className={`Navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
