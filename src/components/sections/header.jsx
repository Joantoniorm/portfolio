import React from "react";
import '../../index.css';
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscBriefcase,
  VscGithub,
  VscMail,
  VscFilePdf
} from 'react-icons/vsc';
import Dock from '../animations/dock';

function Header() {
    const items = [
        { icon: <VscHome size={18} />, label: 'Inicio', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <VscGithub size={18} />, label: 'Proyectos', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <VscBriefcase size={18} />, label: 'Experiencia', onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <VscMail size={18} />, label: 'Contacto', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
        {icon: <VscFilePdf size={18} />, label: 'CV', onClick: () => 
            {
                const link = document.createElement('a');
                link.href = '/portfolio/CVRodriguezManjonJoseAntonio.pdf'; link.download = 'CV_Jose_Antonio_Rodriguez_Manjon.pdf';
                link.click();
            },
        },
    ];
    return (
        <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
        />
    );
}
export default Header;