import React from 'react';
import './Home.css';
import Navbar from './Navbar';  // Import the Navbar component
import { About_me } from './About_me';
import { Work } from './Work';

export const Home = () => {
  return (
    <div className="App-header">
        {/* Navbar Component */}
        <Navbar />

        {/* Sections */}
        <section id="about">
            <About_me />
        </section>

        <section id="work">
            <Work />
        </section>
        <section id="skills" className="Technical_skills">
          <h2>Technical Skills</h2>
          <p>Details </p>
        </section>

        <section id="education" className="Education">
          <h2>Education</h2>
          <p>Details </p>
        </section>

        <section id="projects" className="Projects">
          <h2>Projects</h2>
          <p>Details </p>
        </section>

        <section id="contact" className="Contact_me">
          <h2>Contact Me</h2>
          <p>information</p>
        </section>
    </div>
  );
};
