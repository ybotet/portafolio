import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esCommon from './es/common.json';
import esHero from './es/hero.json';
import esAbout from './es/about.json';
import esSkills from './es/skills.json';
import esProjects from './es/projects.json';
import esContact from './es/contact.json';
import ruCommon from './ru/common.json';
import ruHero from './ru/hero.json';
import ruAbout from './ru/about.json';
import ruSkills from './ru/skills.json';
import ruProjects from './ru/projects.json';
import ruContact from './ru/contact.json';

const resources = {
    es: {
        common: esCommon,
        hero: esHero,
        about: esAbout,
        skills: esSkills,
        projects: esProjects,
        contact: esContact,
    },
    ru: {
        common: ruCommon,
        hero: ruHero,
        about: ruAbout,
        skills: ruSkills,
        projects: ruProjects,
        contact: ruContact,
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'es',
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        }
    });

export default i18n;