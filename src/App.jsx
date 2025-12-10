import { useState } from 'react';
import './index.css';
import Particles from './components/animations/particles';
import ScrambleText from './components/animations/scrambleText';
import Button from './components/button';

function App() {
  return (
    <>
      <Particles
        className="w-screen min-h-full h-auto bg-black"
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
          <header className="bg-black/10 backdrop-blur-sm sticky top-0 h-30">
            <div className="container mx-auto flex justify-between items-center h-full px-6">
              <h1 className="text-2xl font-bold">
                <ScrambleText text="Joant" className="text-yellow-400" />
              </h1>
              <nav className="space-x-6">
                <Button href="#about" >
                  <ScrambleText text="Sobre mí" className="text-black-400" />
                </Button>
                <Button href="#projects" >
                  <ScrambleText text="Proyectos" className="text-black-400" />
                </Button>
                <Button href="#contact" >
                  <ScrambleText text="Contacto" className="text-black-400" />
                </Button>
              </nav>
            </div>
          </header>

          {/* Hero Section */}
          <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-6xl font-bold mb-4">Hola, soy José Antonio Rodríguez</h2>
            <p className="text-2xl max-w-xl pt-10 pb-7">
              Desarrollador Frontend especializado en React y Tailwind.
            </p>
            <a
              href="#projects"
              className="mt-8 bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-300 transition"
            >
              Ver mis proyectos
            </a>
          </section>

          {/* About Section */}
          <section id="about" className="container mx-auto py-20 px-6 text-black">
            <h3 className="text-3xl font-bold mb-6 text-center">Sobre mí</h3>
            <p className="max-w-2xl mx-auto text-center text-gray-800">
              Soy un desarrollador frontend con experiencia en React y Tailwind, creando interfaces modernas, limpias y responsivas.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="bg-black/70 py-20 px-6">
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition">
                <h4 className="font-bold text-xl mb-2">Proyecto 1</h4>
                <p className="text-gray-700">Descripción breve del proyecto.</p>
                <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Ver más</a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition">
                <h4 className="font-bold text-xl mb-2">Proyecto 2</h4>
                <p className="text-gray-700">Descripción breve del proyecto.</p>
                <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Ver más</a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition">
                <h4 className="font-bold text-xl mb-2">Proyecto 3</h4>
                <p className="text-gray-700">Descripción breve del proyecto.</p>
                <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Ver más</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="container mx-auto py-20 px-6 text-black">
            <h3 className="text-3xl font-bold mb-6 text-center">Contacto</h3>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Mensaje"
                className="w-full p-3 border border-gray-300 rounded"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-300 transition"
              >
                Enviar
              </button>
            </form>
          </section>

          {/* Footer */}
          <footer className="bg-black/70 text-white py-6 text-center">
            &copy; {new Date().getFullYear()} Joant. Todos los derechos reservados.
          </footer>
        </div>
      </Particles>
    </>
  );
}

export default App;
