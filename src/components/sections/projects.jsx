import React from 'react';
import Carousel from '../../carousel';
import '../../index.css';

function Projects() {
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
    return(
        <section className='flex flex-col max-w-full max-h-full items-center py-12'>
            <h1 className='w-full flex justify-center font-bold text-yellow-600 text-6xl mb-16'>Proyectos</h1>
            <Carousel items={slides}></Carousel>
        </section>
    );
    
}
export default Projects;