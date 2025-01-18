import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact-section">
        <h1 className="contact-title">Get In Touch</h1>
        <h2 className="contact-summary">
          My inbox is always open. Whether you have a question or just want to say hi
        </h2>
        <a href="mailto:mmeesala@gmu.edu" className="contact-button">
          Say Hello
        </a>
      </section>
    </div>
  );
};
