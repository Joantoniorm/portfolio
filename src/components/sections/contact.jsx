import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if(loading) return; 
        setLoading(true);
        //Las variables son de entorno para evitar exponer mis claves aquí van tus propias claves!!
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            scrollToHero();
            setStatus('SUCCESS');
            form.current.reset();
            
        }).catch(() => {
            scrollToHero();
            setStatus('ERROR');
            
        }).finally(() => {
            setLoading(false);
        });
        setTimeout(() => { setStatus(null); }, 5000);
    }
    const scrollToHero = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {status && (
                <div className={` fixed top-6 px-6 py-4 left-1/2 -translate-x-1/2 rounded-2xl font-bold shadow-lg transition-all ${status === 'SUCCESS' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {status === 'SUCCESS' ? 'Gracias por contactarme responderé lo antes posible!' : 'Parece que ha habido un problema. Puedes contactarme mediante mis datos!!'}
                </div>
            )}

            <section id="contact" className="max-w-screen-2xl m-auto w-full md:py-24 sm:py-12 px-6">
                <div className="mx-auto max-w-3xl flex flex-col items-center text-center">

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-doto text-yellow-600 mb-16 mt-16">
                        CONTACTO
                    </h2>
                    <p className="mt-6 mb-12 text-gray-300 max-w-xl">
                        ¿Tienes algún proyecto en mente o quieres ponerte en contacto conmigo?
                        Escríbeme y te responderé lo antes posible.
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-6 border p-6 border-white/10 bg-white/2 backdrop-blur-sm rounded-2xl ">

                        <div className='flex flex-row gap-4 w-full'>
                            <input
                                type="text"
                                placeholder="Nombre"
                                name='name'
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:shadow-none focus:border-yellow-600 transition"
                            />
                            <input
                                type="text"
                                name='lastname'
                                placeholder="Apellido"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-yellow-600 transition"
                            />

                        </div>
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-yellow-600 transition"
                        />
                        <textarea
                            placeholder="Mensaje"
                            name='message'
                            rows={5}
                            className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-yellow-600 transition resize-none"
                        />
                        <button
                            type='submit'
                            disabled={loading}
                            href="#hero"
                            
                            className="mt-6 self-center bg-yellow-600 text-black font-bold px-10 py-4 rounded-xl transition hover:scale-105 hover:bg-yellow-500"
                        >
                            ENVIAR MENSAJE
                        </button>

                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
