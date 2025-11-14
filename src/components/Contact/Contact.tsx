import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ContactFormData } from '../../types';
import { useTranslation } from '../../hooks/useTranslation';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const { t } = useTranslation();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío de formulario
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Formulario enviado:', formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: t('contact:info.location'),
            content: t('contact:info.contentLocation'),
            link: '#'
        },
        {
            icon: <FaPhone />,
            title: t('contact:info.phone'),
            content: t('contact:info.contentPhone'),
            link: 'tel:+7(915)136 87 85'
        },
        {
            icon: <FaEnvelope />,
            title: t('contact:info.email'),
            content: t('contact:info.contentEmail'),
            link: 'yaiselbotet@gmail.com'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">{t('contact:title')}</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>{t('contact:subtitle')}</h3>
                        <p>{t('contact:description')}</p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="contact-item"
                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    <div className="contact-icon">
                                        {item.icon}
                                    </div>
                                    <div className="contact-text">
                                        <strong>{item.title}</strong>
                                        <span>{item.content}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t('contact:form.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact:form.namePlaceholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t('contact:form.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact:form.emailPlaceholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">{t('contact:form.subject')}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact:form.subjectPlaceholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contact:form.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder={t('contact:form.messagePlaceholder')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    t('contact:form.sending')
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        {t('buttons:sendMessage')}
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="form-message success">
                                    {t('contact:form.success')}
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-message error">
                                    {t('contact:form.error')}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;