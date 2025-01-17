import React from 'react';
import './Home.css';
import Navbar from './Navbar';  // Import the Navbar component
import { About_me } from './About_me';

export const Home = () => {
  return (
    <div className="App-header">
        {/* Navbar Component */}
        <Navbar />

        {/* Sections */}
        <About_me />
          <div className="Work_experience">
            WORK EXPERIENCE
          </div>
          <div className="Technical_skills">
            Technical Skills
          </div>
          <div className="Education">
            Education
          </div>
          <div className="Projects">
            Projects
          </div>
          <div className="Contact_me">
            Contact Me
          </div>
    </div>
  );
};
