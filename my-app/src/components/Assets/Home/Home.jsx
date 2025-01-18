import React from 'react';
import './Home.css';
import Navbar from './Navbar';  // Import the Navbar component
import { About_me } from './About_me';
import { Work } from './Work';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer} from './Footer';

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
            <Skills/>
        </section>

        <section id="projects" className="Projects">
          <Projects />
        </section>

        <section id="contact" className="Contact_me">
          <Contact />
        </section>
          <Footer />

    </div>
  );
};
