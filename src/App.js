// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';


function App() {
  return (
    <div className="App bg-pastelGreen min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />

      </main>
    </div>
  );
}

export default App;
