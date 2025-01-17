import React, { useState } from 'react';
import './Work.css';

export const Work = () => {
  const [activeSection, setActiveSection] = useState('tcs-systems-engineer');

  const experiences = {
    'tcs-systems-engineer': {
      title: 'Tata Consultancy Services | Systems Engineer',
      period: 'Nov 2021 - Dec 2022',
      bullets: [
        'Optimized identity management by programming RESTful APIs in Node.js and TypeScript with Keycloak, improving data integration efficiency and reducing processing time by 25%, saving 15 hours weekly.',
        'Spearheaded a 20% security enhancement by developing custom Node.js packages and implementing tenant-specific token generation for authentication.',
        'Improved REST APIs reliability by 25% through robust data validation and error handling, and boosted PostgreSQL performance by 30% with advanced querying and indexing.',
        'Migrated backend services from Java to Node.js, improving scalability, boosting test efficiency by 15% through streamlined code refactoring and endpoint validation.',
        'Developed test cases with JUnit and Mockito for web services, achieving 90% coverage, and improved API reliability by 20% through end-to-end testing and validation using SOAP UI and Postman.',
        'Promoted from Assistant Systems Engineer to Systems Engineer, reflecting my contributions and ability to take on more complex responsibilities.',
      ],
    },
    'tcs-assistant-engineer': {
      title: 'Tata Consultancy Services | Assistant Systems Engineer',
      period: 'Nov 2020 - Oct 2021',
      bullets: [
        'Implemented DevOps practices with CI/CD pipelines and load balancing on Google Cloud APIGEE and AWS, improving deployment efficiency by 30% and enhancing microservices scalability.',
        'Engineered a Java Spring Boot-based component for seamless data ingestion from Mosquitto MQTT and storage in IBM\'s Tape Files, optimizing data retrieval speed by 30% and reducing storage costs by 20%.',
      ],
    },
    'grepthor': {
      title: 'Grepthor Software Solutions | Machine Learning Intern',
      period: 'May 2019 - Jun 2019',
      bullets: [
        'Refined a machine learning diagnostic model, achieving an 18% increase in accuracy through strategic optimization and algorithm tuning.',
        'Conducted data preprocessing with feature selection and normalization, using TensorFlow, Scikit-learn, and Pandas for efficient model training and deployment.',
      ],
    },
  };

  return (
    <section id="work" className="work-section">
      <h2 className="work-title">Where I've Worked</h2>
      <div className="work-layout">
        {/* Left Sidebar: Buttons */}
        <div className="sidebar">
          <button
            className={`sidebar-button ${activeSection === 'tcs-systems-engineer' ? 'active' : ''}`}
            onClick={() => setActiveSection('tcs-systems-engineer')}
          >
            TCS | Systems Engineer
          </button>
          <button
            className={`sidebar-button ${activeSection === 'tcs-assistant-engineer' ? 'active' : ''}`}
            onClick={() => setActiveSection('tcs-assistant-engineer')}
          >
            TCS | Assistant Systems Engineer
          </button>
          <button
            className={`sidebar-button ${activeSection === 'grepthor' ? 'active' : ''}`}
            onClick={() => setActiveSection('grepthor')}
          >
            Grepthor | ML Intern
          </button>
        </div>

        {/* Right Content Area */}
        <div className="content">
          <h3>{experiences[activeSection].title}</h3>
          <h4>{experiences[activeSection].period}</h4>
          <ul>
            {experiences[activeSection].bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
