import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/ybotet',
            icon: <FaGithub />
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/ybotet',
            icon: <FaLinkedin />
        }
    ];

    const quickLinks = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.contact'), href: '#contact' }
    ];

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">{t('nav.nombre')}</h3>
                        <p className="footer-description">
                            {t('hero:description')}
                        </p>
                        <div className="footer-social">
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

                    <div className="footer-section">
                        <h4>{t('common:quickLinks')}</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="footer-link"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t('contact:info.contact')}</h4>
                        <div className="footer-contact">
                            <p>📧 yaiselbotet@gmail.com</p>
                            <p>📱 +7(915)136 87 85</p>
                            <p>📍 {t('contact:info.contentLocation')}</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} ybotet  <FaHeart className="heart-icon" />
                            {/* {t('footer:using')} */}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;