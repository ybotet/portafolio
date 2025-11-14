import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { HeaderProps } from '../../types';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: t('nav.home') },
        { id: 'about', label: t('nav.about') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'projects', label: t('nav.projects') },
        { id: 'contact', label: t('nav.contact') }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav container">
                <div className="logo">
                    <h2>{t('nav.nombre')}</h2>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className="nav-link"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="nav-controls">
                    <LanguageSwitcher />

                    <button
                        className="theme-toggle"
                        onClick={toggleDarkMode}
                        aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;