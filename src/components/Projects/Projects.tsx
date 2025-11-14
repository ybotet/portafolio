import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { Project, ProjectCardProps } from '../../types';
import { useTranslation } from '../../hooks/useTranslation';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');
    const { t } = useTranslation();

    const projects: Project[] = [
        {
            id: 1,
            title: t('projects:projects.telecom.title'),
            description: t('projects:projects.telecom.description'),
            image: "/img/projects/project1.jpg",
            technologies: t('projects:projects.telecom.technologies', { returnObjects: true }) as string[],
            github: "https://github.com/ybotet/SISGAD5",
            demo: "http://localhost:3000/#",
            featured: true
        },
        {
            id: 2,
            title: t('projects:projects.tourism.title'),
            description: t('projects:projects.tourism.description'),
            image: "/img/projects/project2.png",
            technologies: t('projects:projects.tourism.technologies', { returnObjects: true }) as string[],
            github: "https://github.com/ybotet/acubamostour",
            demo: "http://localhost:3000/#",
            featured: true
        },
        {
            id: 3,
            title: t('projects:projects.crm.title'),
            description: t('projects:projects.crm.description'),
            image: "/img/projects/project3.jpg",
            technologies: t('projects:projects.crm.technologies', { returnObjects: true }) as string[],
            github: "https://github.com/ybotet/MesaPrueba",
            demo: "http://localhost:3000/#",
            featured: false
        }
    ];

    const filters = [
        { key: 'all', label: t('projects:filters.all') },
        { key: 'featured', label: t('projects:filters.featured') },
        { key: 'fullstack', label: t('projects:filters.fullstack') },
        { key: 'frontend', label: t('projects:filters.frontend') },
        { key: 'backend', label: t('projects:filters.backend') }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'featured') return project.featured;
        if (filter === 'fullstack') {
            return project.technologies.includes('React') &&
                (project.technologies.includes('Node.js') || project.technologies.includes('Express'));
        }
        if (filter === 'frontend') {
            return project.technologies.includes('React') &&
                !project.technologies.includes('Node.js') &&
                !project.technologies.includes('Express');
        }
        if (filter === 'backend') {
            return (project.technologies.includes('Node.js') || project.technologies.includes('Express')) &&
                !project.technologies.includes('React');
        }
        return true;
    });

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">{t('projects:title')}</h2>

                <div className="projects-filters">
                    <div className="filter-label">
                        <FaFilter />
                        {t('projects:filterLabel')}
                    </div>
                    {filters.map((filterItem) => (
                        <button
                            key={filterItem.key}
                            className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
                            onClick={() => setFilter(filterItem.key)}
                        >
                            {filterItem.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>{t('projects:noProjects')}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`project-card ${project.featured ? 'featured' : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            {project.featured && (
                <div className="featured-badge">⭐ {t('projects:buttons.featured')}</div>
            )}

            <div className="project-image">
                <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/img/projects/placeholder.jpg';
                    }}
                />
                <div className="project-overlay">
                    <div className="project-links">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={t('projects:buttons.viewCode')}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={t('projects:buttons.liveDemo')}
                        >
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;