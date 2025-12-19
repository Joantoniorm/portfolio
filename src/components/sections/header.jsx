import { use, useEffect, useState } from "react";
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
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    
    function stackDock() {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (!mobile) setMenuOpen(false);
    }
    const fullDeploy = [
        { icon: <VscHome size={18} />, label: 'Inicio', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <VscGithub size={18} />, label: 'Proyectos', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <VscBriefcase size={18} />, label: 'Experiencia', onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <VscMail size={18} />, label: 'Contacto', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
        {
            icon: <VscFilePdf size={18} />, label: 'CV', onClick: () => {
                const link = document.createElement('a');
                link.href = '/portfolio/CVRodriguezManjonJoseAntonio.pdf'; link.download = 'CV_Jose_Antonio_Rodriguez_Manjon.pdf';
                link.click();
            },
        },
        { icon: <VscListFlat size={18} />, label: 'Menú', onClick: () => { setIsStacked(!isStacked); } }
    ];
    const stackDeploy = [
        { icon: <VscListFlat size={18} />, label: 'Menú', onClick: () => { setIsStacked(!isStacked); } },
    ];
    useEffect(() => {
        stackDock();
        window.addEventListener('resize', stackDock);
        return () => window.removeEventListener('resize', stackDock);
    }, []);

    }
    return (
        <Dock
            items={isStacked ? stackDeploy : fullDeploy}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
        />
    );
}
export default Header;