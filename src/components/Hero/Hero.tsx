import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/ybotet',
            icon: <FaGithub />
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/tuusuario',
            icon: <FaLinkedin />
        }
    ];

    return (
        <section id="home" className="hero">
            <div className="hero-container container">
                <div className="hero-content">
                    <span className="hero-greeting">{t('hero:greeting')}</span>
                    <h1 className="hero-title">
                        <span className="hero-name">{t('hero:name')}</span>
                    </h1>
                    <h2 className="hero-subtitle">{t('hero:title')}</h2>
                    <p className="hero-description">
                        {t('hero:description')}
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            <FaFileDownload />
                            {t('buttons.viewProjects')}
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            {t('buttons.contactMe')}
                        </button>
                    </div>

                    <div className="hero-social">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-container">
                        <div className="profile-image">
                            <img
                                src="/img/profile.jpg"
                                alt={t('hero:name')}
                                className="profile-photo"
                            />

                        </div>
                        <div className="floating-tech react">⚛️ React</div>
                        <div className="floating-tech nodejs">🟢 Node.js</div>
                        <div className="floating-tech postgres">🐘 PostgreSQL</div>
                    </div>

                </div>
            </div>

            <button
                className="scroll-indicator"
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to next section"
            >
                <FaArrowDown />
            </button>
        </section>
    );
};

export default Hero;