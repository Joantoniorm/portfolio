import { useState } from 'react';
import './index.css';
import Particles from './components/animations/particles';
import ScrambleText from './components/animations/scrambleText';
import Button from './components/generic-components/button';
import placeholder from './assets/Placeholder1.jpg';
import Hero from './components/sections/hero';
import Projects from './components/sections/projects';
import Experience from './components/sections/experience';
import Contact from './components/sections/contact';

function App() {
  const slides = [
  {
    image: "/img/project1.jpg",
    title: "Proyecto 1",
    description: "Landing page con React y Tailwind"
  },
  {
    image: "/img/project2.jpg",
    title: "Proyecto 2",
    description: "Dashboard con animaciones"
  },
];
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
        {/* Contenido dentro de Particles */}

        <div className="relative z-10 font-sans text-white">

          {/* Header */}
          <header className="bg-white/10 backdrop-blur-sm sticky top-0 h-20">
            <div className="container mx-auto flex justify-between items-center h-full px-6">
              <h1 className="text-2xl font-bold">
                <ScrambleText text="Joant" className="text-yellow-400" />
              </h1>
              <nav className="space-x-6">
                <Button href="#about" className="w-[150px] h-[50px] ">
                  <ScrambleText text="Sobre mí" className="text-black-400" />
                </Button>
                <Button href="#projects" className="w-[150px] h-[50px] ">
                  <ScrambleText text="Proyectos" className="text-black-400" />
                </Button>
                <Button href="#contact" className="w-[150px] h-[50px]" >
                  <ScrambleText text="Contacto" className="text-black-400" />
                </Button>
              </nav>
            </div>
          </header>
          <Hero/>
          <Projects/>
          <Experience/>
          <Contact/>
          <footer className="bg-black/70 text-white py-6 text-center">
            &copy; {new Date().getFullYear()} Joant. Todos los derechos reservados.
          </footer>
        </div>
      </Particles>
    </>
  );
}

export default App;
