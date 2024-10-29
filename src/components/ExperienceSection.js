// src/components/ExperienceSection.js
import React, { useState } from 'react';
import sitting from '../assets/sitting.png';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('amazon');
  const fadeInRef = useScrollFadeIn();

  const experiences = [
    {
      id: 'amazon',
      title: 'Software Engineer Intern @ Amazon',
      company: 'Amazon',
      period: 'June 2021 - August 2021',
      details: [
        'Developed scalable services to improve processing speed and data integrity for large datasets.',
        'Collaborated with a team of engineers to implement and test new features in the AWS platform.',
        'Enhanced security and performance of existing services through detailed code reviews and optimizations.'
      ],
    },
    {
      id: 'ericsson',
      title: 'Network Engineer Intern @ Ericsson',
      company: 'Ericsson',
      period: 'May 2020 - August 2020',
      details: [
        'Assisted in designing and deploying 5G network solutions for clients across the region.',
        'Worked closely with senior engineers to troubleshoot network performance issues.',
        'Documented best practices and helped automate routine network monitoring tasks.'
      ],
    },
    {
      id: 'umass',
      title: 'Research Assistant @ University of Massachusetts Amherst',
      company: 'University of Massachusetts Amherst',
      period: 'September 2019 - May 2020',
      details: [
        'Conducted research on machine learning algorithms for natural language processing.',
        'Collaborated with professors and graduate students to publish research findings.',
        'Presented research outcomes in departmental seminars and contributed to ongoing projects.'
      ],
    },
    {
      id: 'google',
      title: 'Software Engineering Intern @ Google',
      company: 'Google',
      period: 'June 2019 - August 2019',
      details: [
        'Developed features for Google Cloud Platform to enhance data management capabilities.',
        'Collaborated with cross-functional teams to ensure robust and scalable cloud solutions.',
        'Participated in agile development cycles and contributed to product testing and QA.'
      ],
    },
    {
      id: 'microsoft',
      title: 'Software Engineer Intern @ Microsoft',
      company: 'Microsoft',
      period: 'June 2018 - August 2018',
      details: [
        'Implemented new components for Microsoft Azure that improved service response times.',
        'Optimized SQL databases and improved query performance, resulting in faster data retrieval.',
        'Worked in a team environment, focusing on code quality and adherence to industry standards.'
      ],
    },
  ];

  return (
    <section id="experienceSection" ref={fadeInRef} className="bg-transparent flex justify-center items-center min-h-screen">
      
      {/* Experience Section with Shadow and Rounded Corners */}
      <div className="bg-transparent backdrop-blur-lg rounded-xl shadow-2xl flex w-11/12 max-w-6xl overflow-hidden p-10">
        
        {/* Sidebar for Navigation */}
        <div className="w-1/4 p-6 bg-pastelGreen text-gray-700 border-r border-gray-300 flex flex-col items-center rounded-l-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">/ Experience</h2>
          
          {/* Toggle Links for Each Experience */}
          {experiences.map((experience) => (
            <button 
              key={experience.id}
              onClick={() => setActiveExperience(experience.id)}
              className={`block py-2 px-4 mb-2 text-left w-full rounded-lg transition-colors duration-300 ${
                activeExperience === experience.id ? 'text-pastelPink bg-gray-900' : 'hover:text-gray-900 hover:bg-pastelPink'
              }`}
            >
              {experience.company.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-1/4 p-6 flex items-center justify-center">
          <img src={sitting} alt="Profile" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>

        {/* Content Display Area */}
        <div className="w-1/2 p-8 text-lg">
          {experiences.map((experience) =>
            activeExperience === experience.id ? (
              <div key={experience.id} className="transition-opacity duration-500 ease-in-out opacity-100">
                <h3 className="text-2xl font-semibold text-pastelPink mb-4">{experience.title}</h3>
                <p className="text-base text-gray-500 mb-4">{experience.period}</p>
                <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-800">
                  {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;