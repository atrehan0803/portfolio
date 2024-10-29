// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of the project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of the project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-600">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
