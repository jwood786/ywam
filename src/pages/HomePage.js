import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import VideoBanner from '../components/VideoBanner';
import { useLanguage } from '../context/LanguageContext';
import './css/homepage.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { translations } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      '.intro-section h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.intro-section',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.intro-section p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.intro-section',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.values-section h2',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.values-list-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top center+=100',
        },
      }
    );
  }, []);

  return (
    <div className="main-content">
      <VideoBanner />
      <div className="intro-section">
        <h1>{translations.missionVision}</h1>
        <p>{translations.missionVisionBrief}</p>
        <h1>{translations.welcome}</h1>
        <p>{translations.invitation}</p>
      </div>
      <div className="values-section">
        <h2>{translations.ywamValues}</h2>
        <ul className="values-list">
          {translations.ywamValuesList.map((value, index) => (
            <li key={index} className="values-list-item">{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
