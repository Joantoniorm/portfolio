import React from 'react';
import '../../index.css';
import result_0 from '../../assets/result_0.png';
import { ScrambleProvider } from '../context/scrambleContext';

function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-flow-row items-center gap-y-6 sm:gap-y-8 md:gap-x-28 md:py-2 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-4 sm:px-6"
    >
      <div className="flex w-full max-w-2xl justify-center items-center justify-self-center rounded-2xl py-10 sm:py-16 md:py-32 lg:justify-self-end">
        <img
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[620px] md:h-[600px] rounded-2xl transition-transform duration-300 ease-out hover:scale-105 max-w-full h-auto"
          src={result_0}
          alt="Foto de perfil"
        />
      </div>

      <div className="max-w-xl text-center sm:text-center lg:text-left flex flex-col justify-self-center">
        <ScrambleProvider>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-doto text-yellow-600 leading-tight select-none font-roboto">
            DESARROLLADOR
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-doto mt-4 sm:mt-6 mb-6 sm:mb-8 md:mb-12 select-none font-roboto">
            WEB
          </h1>
        </ScrambleProvider>
        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Tras comenzar mis estudios en Filosofía, descubrí que mi verdadera pasión
          estaba en el mundo tecnológico y decidí reorientar mi camino para dedicarme
          profesionalmente a la programación. Desde entonces, he ido construyendo mi
          formación y proyectos.
        </p>
      </div>
    </section>
  );
}

export default Hero;
