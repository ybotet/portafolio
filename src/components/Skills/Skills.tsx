import React from 'react';
import './Skills.css';
import {
    FaReact,
    FaJs,
    FaNodeJs,
    FaDatabase
} from 'react-icons/fa';
import {
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiPostman
} from 'react-icons/si';
import { Skill } from '../../types';
import { useTranslation } from '../../hooks/useTranslation';

const Skills: React.FC = () => {
    const { t } = useTranslation();

    const technicalSkills: Skill[] = [
        // Frontend
        { name: 'React', level: 85, category: 'frontend', icon: 'react' },
        { name: 'TypeScript', level: 83, category: 'frontend', icon: 'typescript' },
        { name: 'JavaScript', level: 90, category: 'frontend', icon: 'javascript' },
        { name: 'HTML/CSS', level: 92, category: 'frontend', icon: 'html' },

        // Backend
        { name: 'Node.js', level: 90, category: 'backend', icon: 'nodejs' },
        { name: 'Express.js', level: 92, category: 'backend', icon: 'express' },
        { name: 'REST APIs', level: 94, category: 'backend', icon: 'api' },

        // Databases - Ahora con category: 'database'
        { name: 'MongoDB', level: 88, category: 'database', icon: 'mongodb' },
        { name: 'PostgreSQL', level: 75, category: 'database', icon: 'postgresql' },
        { name: 'Mongoose', level: 82, category: 'database', icon: 'mongoose' },

        // Tools
        { name: 'Git', level: 88, category: 'tool', icon: 'git' },
        { name: 'Docker', level: 90, category: 'tool', icon: 'docker' },
        { name: 'Postman', level: 85, category: 'tool', icon: 'postman' }
    ];

    const softSkills = t('skills:softSkills', { returnObjects: true }) as string[];

    const getSkillIcon = (iconName: string) => {
        const iconProps = { size: 24 };

        switch (iconName) {
            case 'react': return <FaReact {...iconProps} />;
            case 'typescript': return <SiTypescript {...iconProps} />;
            case 'javascript': return <FaJs {...iconProps} />;
            case 'nodejs': return <FaNodeJs {...iconProps} />;
            case 'express': return <SiExpress {...iconProps} />;
            case 'mongodb': return <SiMongodb {...iconProps} />;
            case 'postgresql': return <SiPostgresql {...iconProps} />;
            case 'git': return <SiGit {...iconProps} />;
            case 'docker': return <SiDocker {...iconProps} />;
            case 'postman': return <SiPostman {...iconProps} />;
            case 'html': return <span {...iconProps}>🌐</span>;
            case 'api': return <span {...iconProps}>🔗</span>;
            case 'mongoose': return <span {...iconProps}>🐘</span>;
            default: return <FaDatabase {...iconProps} />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'frontend': return '#61dafb';
            case 'backend': return '#68d391';
            case 'database': return '#f6ad55';
            case 'tool': return '#a78bfa';
            default: return '#cbd5e0';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'frontend': return t('skills:categories.frontend');
            case 'backend': return t('skills:categories.backend');
            case 'database': return t('skills:categories.database');
            case 'tool': return t('skills:categories.tool');
            default: return category;
        }
    };

    // Agrupar habilidades por categoría
    const skillsByCategory = technicalSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">{t('skills:title')}</h2>

                <div className="skills-content">
                    <div className="technical-skills">
                        <h3 className="skills-subtitle">{t('skills:technical')}</h3>

                        {Object.entries(skillsByCategory).map(([category, skills]) => (
                            <div key={category} className="skill-category">
                                <h4 className="category-title" style={{ color: getCategoryColor(category) }}>
                                    {getCategoryLabel(category)}
                                </h4>
                                <div className="skills-grid">
                                    {skills.map((skill, index) => (
                                        <div key={skill.name} className="skill-item">
                                            <div className="skill-header">
                                                <div className="skill-info">
                                                    <div className="skill-icon">
                                                        {getSkillIcon(skill.icon!)}
                                                    </div>
                                                    <span className="skill-name">{skill.name}</span>
                                                </div>
                                                <span className="skill-percentage">{skill.level}%</span>
                                            </div>

                                            <div className="skill-bar">
                                                <div
                                                    className="skill-progress"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        backgroundColor: getCategoryColor(category)
                                                    }}
                                                    data-aos="fade-left"
                                                    data-aos-delay={index * 100}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="soft-skills">
                        <h3 className="skills-subtitle">{t('skills:soft')}</h3>
                        <div className="soft-skills-grid">
                            {Array.isArray(softSkills) ? (
                                softSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="soft-skill-item"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        {skill}
                                    </div>
                                ))
                            ) : (
                                <div className="no-skills">
                                    <p>No hay habilidades disponibles</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;