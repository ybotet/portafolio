import React from 'react';
import './LanguageSwitcher.css';
import { useTranslation } from '../../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
    const { currentLang, changeLanguage } = useTranslation();

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${currentLang === 'es' ? 'active' : ''}`}
                onClick={() => changeLanguage('es')}
                aria-label="Cambiar a español"
            >
                ES
            </button>
            <span className="separator">|</span>
            <button
                className={`lang-btn ${currentLang === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
                aria-label="Переключить на русский"
            >
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;