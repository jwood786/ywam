import React from 'react';
import VideoBanner from '../components/VideoBanner';
import { useLanguage } from '../context/LanguageContext';

const HomePage = () => {
  const { translations } = useLanguage();

  return (
    <div className="main-content">
      <VideoBanner />
      <h1>{translations.missionVision}</h1>
      <p>{translations.missionVisionBrief}</p>
      <h1>{translations.welcome}</h1>
      <p>{translations.invitation}</p>
    </div>
  );
}

export default HomePage;