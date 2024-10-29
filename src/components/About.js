// src/components/About.js
import React from 'react';
import profileImage from '../assets/profile.png'; // Replace with your actual image path

function About() {
  return (
    <section id="about" className="bg text-gray-900 flex justify-center items-center min-h-screen">
      
      {/* About Section with Rounded Corners and Shadow */}
      <div className="bg-pastelPink backdrop-blur-lg rounded-xl shadow-2xl flex w-11/12 max-w-6xl overflow-hidden p-10">
        
        {/* Image Section with Hover Effect */}
        <div className="w-1/3 p-6 flex items-center justify-center">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
          />
        </div>

        {/* About Content Area */}
        <div className="w-2/3 p-8 text-lg">
          <h2 className="text-3xl font-bold text-black mb-4">About Me</h2>
          <p className="text-xl text-gray-800">
            👋 Hi! I'm a passionate developer who loves working with cutting-edge tech like React and Tailwind CSS! 🚀 
            I enjoy crafting sleek, user-friendly interfaces and bringing ideas to life on the web. 🌐
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
