// src/components/Header.js
import React from 'react';
import logoIcon from '../assets/head.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-pastelPink dark:bg-gray-900 text-gray-900 dark:text-white p-4 fixed top-0 right-0 h-screen w-40 flex flex-col items-center shadow-md transition-colors duration-300">
      
      {/* Logo */}
      <div className="mb-6 mt-4">
        <img src={logoIcon} alt="Logo Icon" className="w-24 h-24" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 text-center mt-12">
        <a href="#hero" className="hover:text-pastelGreen dark:hover:text-pastelPink transition duration-300">home</a>
        <a href="#about" className="hover:text-pastelGreen dark:hover:text-pastelPink transition duration-300">about</a>
        <a href="#experienceSection" className="hover:text-pastelGreen dark:hover:text-pastelPink transition duration-300">experiences</a>
        <a href="#projects" className="hover:text-pastelGreen dark:hover:text-pastelPink transition duration-300">projects</a>
      </nav>

      
      {/* Social Icons */}
      <div className="flex-col space-x-7 mt-auto mb-6">
        <a href="https://github.com/atrehan0803" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-pastelPink dark:hover:text-pastelGreen transition duration-300">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://linkedin.com/in/anushka-trehan" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-pastelPink dark:hover:text-pastelGreen transition duration-300">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="mailto:your-atrehan@umass.edu" className="text-gray-900 dark:text-white hover:text-pastelPink dark:hover:text-pastelGreen transition duration-300">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>

    </header>
  );
}

export default Header;

