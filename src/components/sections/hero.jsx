import React from 'react';
import '../../index.css';
import placeholder from '../../assets/Placeholder1.jpg';

function Hero() {
    return (
        <section className="grid grid-flow-row items-center gap-x-0 gap-y-0 py-6 text-center md:gap-x-28 md:py-12 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full">
            <div className="flex w-full max-w-2xl justify-center items-center justify-self-center rounded-2xl py-20 md:py-32 lg:justify-self-end">
                
                    <img
                        className="h-[172px] w-[91px] md:h-[600px] md:w-[600px] rounded-2xl"
                        src={placeholder}
                        alt="Foto de perfil"

                    />
                
            </div>
            <div className="max-w-xl text-center lg:text-left flex flex-col justify-self-center">
                <h1 className="text-6xl font-bold text-yellow-600 leading-none select-none">
                    DESARROLLADOR
                </h1>
                <h1 className="text-6xl font-bold mt-6 mb-12 select-none">WEB</h1>
                <p className="mt-8 text-gray-300 leading-relaxed">
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