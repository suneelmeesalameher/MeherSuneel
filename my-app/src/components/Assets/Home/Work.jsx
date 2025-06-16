import React, { useState } from 'react';
import './Work.css';

export const Work = () => {
  const [activeSection, setActiveSection] = useState('aqr-fullstack-developer');

  const experiences = {
    'aqr-fullstack-developer': {
      title: 'AQR Capital Management | Full Stack Developer',
      period: 'Mar 2024 – Present',
      bullets: [
        'Developed a Portfolio Risk Management System by collaborating with quant analysts, PMs, and compliance teams, streamlining risk metric computation across asset classes through agile sprints.',
        'Built React dashboards with D3.js visualizations, Redux state management, and feature toggles; enhanced client risk data insights by 30% via UX A/B testing and QA collaboration.',
        'Engineered and optimized PostgreSQL schemas on AWS RDS using partitioning and indexing, decreasing query latency by 40% and enforcing encryption for enterprise-grade security compliance.',
        'Designed scalable Spring Boot microservices for risk calculations, stress testing, and scenario analysis; leveraged CompletableFuture and Spring Batch to boost performance by 50% during peak loads.',
        'Achieved 25% fewer deployment errors by automating regression testing and CI/CD with Jenkins and AWS CodePipeline; maintained high-quality standards with JUnit and Mockito test coverage.',
        'Partnered with DevOps to containerize services in Docker, deploy to AWS ECS, configure auto-scaling, and monitor via CloudWatch; ensured 99.9% uptime and secure deployments with Secrets Manager.',
      ],
    },

    'tcs-software-engineer': {
      title: 'Tata Consultancy Services | Software Engineer',
      period: 'Aug 2021 - Dec 2022',
      bullets: [
        'Optimized identity management by programming RESTful APIs in Node.js and TypeScript with Keycloak, improving data integration efficiency and reducing processing time by 25%, saving 15 hours weekly.',
        'Spearheaded a 20% security enhancement by developing custom Node.js packages and implementing tenant-specific token generation for authentication.',
        'Improved REST APIs reliability by 25% through robust data validation and error handling, and boosted PostgreSQL performance by 30% with advanced querying and indexing.',
        'Migrated backend services from Java to Node.js, improving scalability, boosting test efficiency by 15% through streamlined code refactoring and endpoint validation.',
        'Developed test cases with JUnit and Mockito for web services, achieving 90% coverage, and improved API reliability by 20% through end-to-end testing and validation using SOAP UI and Postman.',
        'Promoted from Assistant Systems Engineer to Systems Engineer, reflecting my contributions and ability to take on more complex responsibilities.',
      ],
    },
    'tcs-associate-software-engineer': {
      title: 'Tata Consultancy Services | Associate Software Engineer',
      period: 'Nov 2020 - Jul 2020',
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
          <button className={`sidebar-button ${activeSection === 'aqr-fullstack-developer' ? 'active' : ''}`} 
          onClick={() => setActiveSection('aqr-fullstack-developer')}>
            AQR | Full Stack Developer
          </button>

          <button
            className={`sidebar-button ${activeSection === 'tcs-software-engineer' ? 'active' : ''}`}
            onClick={() => setActiveSection('tcs-software-engineer')}
          >
            TCS | Software Engineer
          </button>
          <button
            className={`sidebar-button ${activeSection === 'tcs-associate-software-engineer' ? 'active' : ''}`}
            onClick={() => setActiveSection('tcs-associate-software-engineer')}
          >
            TCS | Associate Software Engineer
          </button>
          <button
            className={`sidebar-button ${activeSection === 'grepthor' ? 'active' : ''}`}
            onClick={() => setActiveSection('grepthor')}
          >
            Grepthor | Machine Learning Intern
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
