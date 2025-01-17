import React from 'react';
import './Home.css';
import Navbar from './Navbar';  // Import the Navbar component

export const Home = () => {
  return (
    <div>
      <header className="App-header">
        {/* Navbar Component */}
        <Navbar />

        {/* Sections */}
        <div className="About_me">
            About Me
        </div>
          <div className="Work_experience">
            Work-experience
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
      </header>
    </div>
  );
};
