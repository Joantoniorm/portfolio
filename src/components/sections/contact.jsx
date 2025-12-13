import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2>Contacto</h2>
                <p>¿Tienes una pregunta o propuesta? ¡Ponte en contacto conmigo!</p>
                
                <div className="contact-methods">
                    <a href="mailto:tu-email@gmail.com" className="contact-item">
                        <span className="icon">📧</span>
                        <span>tu-email@gmail.com</span>
                    </a>
                    
                    <a href="tel:+1234567890" className="contact-item">
                        <span className="icon">📱</span>
                        <span>+1 (234) 567-890</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <span className="icon">💼</span>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;