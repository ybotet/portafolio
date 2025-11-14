export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    featured?: boolean;
}

// Corregir el tipo de category para incluir 'database'
export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'database' | 'tool' | 'soft'; // ← Agregar 'database'
    icon?: string;
}

export interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export interface ProjectCardProps {
    project: Project;
    index: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

// Tipo para las traducciones que devuelven arrays
export interface TranslationDetails {
    [key: string]: string | string[];
}