import { useState, useEffect } from 'react';
import i18n from '../locales';

export const useTranslation = () => {
    const [currentLang, setCurrentLang] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChanged = (lng: string) => {
            setCurrentLang(lng);
        };

        i18n.on('languageChanged', handleLanguageChanged);

        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, []);

    const changeLanguage = (lng: 'es' | 'ru') => {
        i18n.changeLanguage(lng);
        localStorage.setItem('preferred-language', lng);
    };

    return {
        currentLang,
        changeLanguage,
        t: i18n.t.bind(i18n)
    };
};