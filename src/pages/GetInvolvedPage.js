import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/GetInvolvedPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const GetInvolvedPage = () => {
  const { translations } = useLanguage(); // Access the translations from context
  const getInvolvedPage = translations.getInvolvedPage; // Get the translations for the Get Involved Page

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.fromTo(
      '.get-involved-container h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.get-involved-container h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.get-involved-container p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.get-involved-container p',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.get-involved-sections .section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.get-involved-sections',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="get-involved-container">
      <h1>{getInvolvedPage.title}</h1>
      <p>{getInvolvedPage.description}</p>

      <div className="get-involved-sections">
        {Object.keys(getInvolvedPage.sections).map((key) => (
          <div key={key} className="section">
            <h2>{getInvolvedPage.sections[key].title}</h2>
            <p>{getInvolvedPage.sections[key].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetInvolvedPage;
