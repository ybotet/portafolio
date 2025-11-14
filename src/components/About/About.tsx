import React from 'react';
import './About.css';
import { FaCode, FaDatabase, FaRocket } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';
// import { TranslationDetails } from '../../types';

const About: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <FaCode />,
            title: t('about:features.fullstack.title'),
            description: t('about:features.fullstack.description')
        },
        {
            icon: <FaDatabase />,
            title: t('about:features.databases.title'),
            description: t('about:features.databases.description')
        },
        {
            icon: <FaRocket />,
            title: t('about:features.performance.title'),
            description: t('about:features.performance.description')
        }
    ];

    // Obtener los detalles de forma segura
    const details = t('about:details', { returnObjects: true }) as string[];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">{t('about:title')}</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p
                            className="about-intro"
                            dangerouslySetInnerHTML={{ __html: t('about:intro') }}
                        />

                        <div className="about-details">
                            {Array.isArray(details) ? (
                                details.map((detail: string, index: number) => (
                                    <p
                                        key={index}
                                        dangerouslySetInnerHTML={{ __html: detail }}
                                    />
                                ))
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: details as string }} />
                            )}
                        </div>

                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">
                                        {feature.icon}
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;