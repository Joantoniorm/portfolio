import React from 'react';
import Carousel from '../generic-components/carousel';
import '../../index.css';
import strawdeck from '../../assets/strawdeck-project.png';
import portfolio from '../../assets/portfolio-project.png';

function Projects() {
    const slides = [
  {
    image: strawdeck,
    title: "Strawdeck",
    description: "Aplicación web para crear y ver las cartas del juego de One Piece Tcg.",
    link:"https://github.com/Joantoniorm/StrawDeck"
  },
  {
    image: portfolio,
    title: "Portfolio",
    description: "Portfolio personal con animaciones y efectos.",
    link:"https://github.com/Joantoniorm/portfolio"
  },
];
    return(
        <section id='projects' className='flex flex-col max-w-full max-h-full items-center py-12'>
            <h1 className='text-4xl sm:text-5xl md:text-7xl font-doto text-yellow-600 mb-16 mt-16'>Proyectos</h1>
            <Carousel items={slides}></Carousel>
        </section>
    );
    
}
export default Projects;