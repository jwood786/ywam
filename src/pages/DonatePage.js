import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/DonatePage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const DonatePage = () => {
  const { translations } = useLanguage(); // Access the translations from context
  const donatePage = translations.donatePage; // Get the translations for the Donate Page

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(donatePage.thankYouMessage);
    setFormData({ name: '', email: '', amount: '', message: '' });
  };

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.fromTo(
      '.donate-container h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.donate-container h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.donate-container p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.donate-container p',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.donate-container form',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: '.donate-container form',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="donate-container">
      <div className="image-layout">
        <div className="main-image">
          <img src="/assets/donation.jpg" alt="Main Donate" />
        </div>
        <div className="side-images">
          <img src="/assets/donation-2.png" alt="Side 1" />
          <img src="/assets/donation-3.png" alt="Side 2" />
        </div>
      </div>
      <h1>{donatePage.title}</h1>
      <p>{donatePage.description}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{donatePage.form.name}:</label>
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
          <label htmlFor="email">{donatePage.form.email}:</label>
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
          <label htmlFor="amount">{donatePage.form.amount}:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{donatePage.form.message}:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{donatePage.form.submitButton}</button>
      </form>
    </div>
  );
}

export default DonatePage;
