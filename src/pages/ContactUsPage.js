import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/ContactUsPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const { translations } = useLanguage();
  const contactUsPage = translations.contactUsPage;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  useEffect(() => {
    gsap.fromTo(
      '.hero-section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '.hero-section', start: 'top 80%', end: 'top 60%' } }
    );

    gsap.fromTo(
      '.contact-form',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, scrollTrigger: { trigger: '.contact-form', start: 'top 80%', end: 'top 60%' } }
    );

    gsap.fromTo(
      '.contact-info',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1, scrollTrigger: { trigger: '.contact-info', start: 'top 80%', end: 'top 60%' } }
    );

    gsap.fromTo(
      '.social-media',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, scrollTrigger: { trigger: '.social-media', start: 'top 80%', end: 'top 60%' } }
    );

    gsap.fromTo(
      '.faq-section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 2, scrollTrigger: { trigger: '.faq-section', start: 'top 80%', end: 'top 60%' } }
    );
  }, []);

  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>{contactUsPage.title}</h1>
        <p>{contactUsPage.description}</p>
        <a href="#contact-form" className="cta-button">Contact Us</a>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="contact-form">
        <h2>{contactUsPage.formTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{contactUsPage.form.name}:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{contactUsPage.form.email}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{contactUsPage.form.phone}:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{contactUsPage.form.message}:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{contactUsPage.form.submitButton}</button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>{contactUsPage.contactInfo.title}</h2>
        <p><strong>{contactUsPage.contactInfo.addressLabel}:</strong> {contactUsPage.contactInfo.address}</p>
        <p><strong>{contactUsPage.contactInfo.phoneLabel}:</strong> {contactUsPage.contactInfo.phone}</p>
        <p><strong>{contactUsPage.contactInfo.emailLabel}:</strong> {contactUsPage.contactInfo.email}</p>
        <div className="map">
          <iframe
            src={contactUsPage.mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title='pageUrl'
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <h2>{contactUsPage.socialMedia.title}</h2>
        <div className="social-icons">
  
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>{contactUsPage.faqTitle}</h2>
        <div className="faq-items">
          {contactUsPage.faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
