import React from 'react';
import './Skills.css';

export const Skills = () => {
  const skills = [
    'Python', 'Java', 'JavaScript', 'C', 'C++', 
    'TypeScript', 'NodeJS', 'ReactJS', 'Springboot', 
    'HTML5', 'CSS', 'Bootstrap', 'Swagger', 
    'NoSQL', 'PostgreSQL', 'MongoDB', 'MySQL', 
    'AWS', 'Google APIGEE', 'GraphQL', 'Docker', 
    'Jenkins', 'Git', 'Postman',
  ];

  return (
    <section id="skills" className="skills-section">
      <h1>Here are a few technologies I’ve worked on</h1>
      <div className="skills-container">
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
