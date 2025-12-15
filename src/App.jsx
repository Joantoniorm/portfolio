import { useState } from 'react';
import './index.css';
import Particles from './components/animations/particles';
import Hero from './components/sections/hero';
import Projects from './components/sections/projects';
import Experience from './components/sections/experience';
import Contact from './components/sections/contact';
import Header from './components/sections/header';
function App() {
  
  return (
    <>
      <Particles
        className="min-h-full h-auto bg-black"
        particleColors={['#e7eb08', '#ecea49']}
        particleCount={400}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={150}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      >
        <div className="relative z-10 font-sans text-white">
          <Header />
          <Hero />
          <Projects />
          <Experience />
          <Contact />
          <footer className="bg-black/70 text-white py-6 text-center">
            &copy; {new Date().getFullYear()} Joant.
          </footer>
        </div>
      </Particles>

    </>
  );
}

export default App;
