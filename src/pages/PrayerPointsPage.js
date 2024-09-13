import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/PrayerPointsPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const PrayerPointsPage = () => {
  const { translations } = useLanguage(); // Access the translations from context
  const prayerPointsPage = translations.prayerPointsPage; // Get the translations for the Prayer Points Page

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.fromTo(
      '.prayer-points-container h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.prayer-points-container h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.prayer-points-container p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.prayer-points-container p',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.prayer-points-list li',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.prayer-points-list',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="prayer-points-container">
      <h1>{prayerPointsPage.title}</h1>
      <p>{prayerPointsPage.description}</p>
      <ul className="prayer-points-list">
        {prayerPointsPage.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrayerPointsPage;
