import React from 'react';
const experiences = [
    {
      role: "Desarrollador Front-End",
      company: "Hubiqus",
      date: "Octubre 2024 - Febrero 2025",
      description: [
      `Durante mi etapa en Hubiqus participé en el diseño y desarrollo de una aplicación web utilizando React.js y
      SpringBoot, implementando interfaces dinámicas y responsivas. Colaboré en la arquitectura del proyecto, optimicé el rendimiento
      de la aplicación y añadí funcionalidades interactivas para mejorar la experiencia del usuario.`
    ],
      tasks:["Desarrollo de componentes reutilizables con React.js","Implementación de llamadas a APIs RESTful","Optimización del rendimiento y la accesibilidad","Colaboración en equipo utilizando metodologías ágiles"],
      link: false,
    }
  ];
function Experience() {
  
  return (
    <section id="experience" className="mt-8 px-8 md:px-20 lg:px-32 md:pt-32 sm:pt-12">
      <div className="max-w-6xl mx-auto">
        <h1 className='w-full flex justify-center pb-24 text-4xl sm:text-5xl md:text-7xl font-doto text-yellow-600'>Experiencia</h1>
        <div className="relative border-l border-yellow-800 pl-8 space-y-20">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h3 className="text-yellow-500 font-semibold">
                  {experience.role}
                </h3>
                <p className="text-white text-xl font-bold">
                  {experience.company}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {experience.date}
                </p>
              </div>
              <div className="md:w-2/3 text-gray-300 leading-relaxed">
                <p>{experience.description}</p>
                <br/>
                <ul className="list-disc list-inside space-y-1">
                  {experience.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
                {experience.link && (
                  <button className="mt-4 text-yellow-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Saber más <span>›</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Experience;