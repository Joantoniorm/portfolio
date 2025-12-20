import { useEffect, useState } from "react";
import '../../index.css';
import {
    VscHome,
    VscBriefcase,
    VscGithub,
    VscMail,
    VscFilePdf,
    VscListFlat
} from 'react-icons/vsc';
import Dock from '../animations/dock';

function Header() {
    const [view, setView] = useState('dock');

    function handleResize() {
        setView('dock');
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function scrollTo(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setView('dock');
    }

    const menuButton = {
        icon: <VscListFlat size={18} />,
        label: 'Menú',
        onClick: () =>
            setView(prev => (prev === 'dock' ? 'menu' : 'dock')),
    };

    const fullDock = [
        { icon: <VscHome size={18} />, label: 'Inicio', onClick: () => scrollTo('hero') },
        { icon: <VscGithub size={18} />, label: 'Proyectos', onClick: () => scrollTo('projects') },
        { icon: <VscBriefcase size={18} />, label: 'Experiencia', onClick: () => scrollTo('experience') },
        { icon: <VscMail size={18} />, label: 'Contacto', onClick: () => scrollTo('contact') },
        {
            icon: <VscFilePdf size={18} />,
            label: 'CV',
            onClick: () => {
                const link = document.createElement('a');
                link.href = '/portfolio/CVRodriguezManjonJoseAntonio.pdf';
                link.download = 'CV_Jose_Antonio_Rodriguez_Manjon.pdf';
                link.click();
            },
        },
        menuButton,
    ];

    const stackDock = [menuButton];

    return (
        <>
            {view === 'dock' && (
                <div className="sticky z-50 sm:top-3 md:top-12 flex justify-end pr-30 animate-scale-in">
                    <div className="animate-scale-in">
                        <Dock
                            items={stackDock}
                            panelHeight={68}
                            baseItemSize={50}
                            magnification={70}
                            
                        />
                    </div>
                </div>
            )}

            {view === 'menu' && (
                <Dock
                    items={ fullDock }
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            )}
        </>
    );
}

export default Header;
