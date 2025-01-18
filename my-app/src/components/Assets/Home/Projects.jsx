import React from 'react';
import './Projects.css';
import linkIcon from '../Icons/Link.png'; // Adjust the path as necessary

export const Projects = () => {
  const projects = [
    {
      title: 'Generative Adversarial Network for Fashion MNIST',
      period: 'Feb 2024 - Apr 2024',
      techStack: 'Python, TensorFlow, Keras',
      description: [
        'Implemented a GAN using TensorFlow and Keras to generate realistic "Shirt" images from the Fashion MNIST dataset, improving image quality by 25%.',
        'Enhanced training efficiency by incorporating data augmentation and adjusting learning rates, reducing model convergence time by 30% over 1,000 epochs.',
      ],
      link: 'https://github.com/suneelmeesalameher/GAN_SHIRT',
    },
    {
      title: 'Real-Time Chatting Application - MERN App',
      period: 'Sept 2023 - Dec 2023',
      techStack: 'MongoDB, Express, React.Js, Node.Js',
      description: [
        'Worked on full stack software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.',
        "Led a cross-functional team to develop 'Echo Threads', a secure messaging web app, enhancing user trust by 25% through advanced privacy features, including AES-GCM 256-bit encryption and Diffie-Hellman key exchange.",
        'Spearheaded project planning, code reviews, and deployment ensuring timely delivery and exceeding user security expectations.',
      ],
      link: 'https://github.com/suneelmeesalameher/EchoThreadServices',
    },
    {
      title: 'Auditing for Bias - Machine Learning',
      period: 'Apr 2023 - May 2023',
      techStack: 'Python, Jupyter',
      description: [
        'Analyzed racial disparities in a COMPAS dataset-trained ML model, achieving 69-73% classifier accuracy.',
        'Assessed the impact of race omission on model performance, offering insights into bias and recidivism.',
      ],
      link: 'https://github.com/suneelmeesalameher/Auditing-for-Bias',
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-title">Some Things I’ve Built</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-period">{project.period}</p>
          <p className="project-tech-stack">Technology Stack: {project.techStack}</p>
          <ul className="project-description">
            {project.description.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={linkIcon} alt="Link Icon" className="project-logo" />
          </a>
        </div>
      ))}
    </div>
  );
};
