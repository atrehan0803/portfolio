// src/components/Hero.js
import React, {useEffect} from 'react';
import { ReactTyped as Typed } from 'react-typed';
import profileImage from '../assets/profile.png';
import logoImage from "../assets/logo.png";

function Hero() {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        shape: {
          type: "circle",
        },
        // color: {
        //   value: "pastelBlue",
        // },
        
        size: {
          value: 5,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          random: true,
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <section id="hero" className="relative bg-sageGreen text-gray-800 h-screen flex items-center justify-center overflow-hidden">
      
      <img 
        src={logoImage} 
        alt="Faded Background" 
        className="absolute top-90 right-50 opacity-40 transform rotate-45 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          zIndex: '0'
        }}
      />

      <img 
        src={logoImage} 
        alt="Faded Background" 
        className="absolute top-90 right-50 opacity-40 transform rotate-45 pointer-events-none"
        style={{
          width: '600px', // Adjust size as needed
          height: '600px',
          zIndex: '0' // Place it behind the main content
        }}
      />

      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>

      {/* Main Hero Content */}
      <div className="flex flex-row-reverse items-center w-full max-w-5xl px-8 z-10">
        
        {/* Image Section */}
        <div className="flex-shrink-0 ml-8 rounded-lg shadow-xl">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-96 h-96 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-pastelPink">
              <Typed
                strings={[
                  "Anushka Trehan", 
                  "a Software Engineer", 
                  "a student"
                ]}
                typeSpeed={75}
                backSpeed={75}
                loop
              />
            </span>
          </h2>
          <p className="mt-4 text-black text-lg">
            I'm a budding sooftware engineer from Boston, MA. I'm fascinated by high-impact solutions and spend my time learning at UMass Amherst. 
            I like snow (like a lot) and boards on snow too. I read fiction, watch tennis and play Minecraft ((if that wasn't obvious))
          </p>
          <div className="mt-6">
            <a href="#projects" className="bg-pastelPink px-4 py-2 rounded text-black hover:bg-pastelPinkDarker">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;