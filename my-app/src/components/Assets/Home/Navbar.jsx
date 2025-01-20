import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

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
      <div className="Navbar-links">
        <a
          href="#about"
          className={`Navbar-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          HOME
        </a>
        <a
          href="#work"
          className={`Navbar-link ${activeSection === 'work' ? 'active' : ''}`}
        >
          WORK EXPERIENCE
        </a>
        <a
          href="#skills"
          className={`Navbar-link ${activeSection === 'skills' ? 'active' : ''}`}
        >
          TECHNICAL EXPERIENCE
        </a>
        <a
          href="#projects"
          className={`Navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className={`Navbar-link contact ${activeSection === 'contact' ? 'active' : ''}`}
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
