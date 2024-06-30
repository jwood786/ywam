import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  EN: {
    home: "Home",
    aboutUs: "About Us",
    ourMinistries: "Our Ministries",
    upcomingCourses: "Upcoming Courses",
    getInvolved: "Get Involved",
    prayerPoints: "Prayer Points",
    donate: "Donate",
    events: "Events",
    blogNews: "Blog/News",
    contactUs: "Contact Us",
    missionVision: "Our Mission and Vision",
    missionVisionBrief: "Brief overview of YWAM Kandy’s mission and vision.",
    welcome: "Welcome to YWAM Kandy",
    invitation: "Invitation to explore the website further.",
  },
  SI: {
    home: "මුල් පිටුව",
    aboutUs: "අප ගැන",
    ourMinistries: "අපගේ සේවාවන්",
    upcomingCourses: "ඉදිරි පාඨමාලා",
    getInvolved: "ඉදිරියට සම්බන්ධ වන්න",
    prayerPoints: "පැතුම් ස්ථාන",
    donate: "දායක වන්න",
    events: "සිදුවීම්",
    blogNews: "බ්ලොග්/ප්‍රවෘත්ති",
    contactUs: "අප අමතන්න",
    missionVision: "අපේ මෙහෙවර සහ දේශන",
    missionVisionBrief: "YWAM කෑන්ඩියේ මෙහෙවර සහ දේශන පිළිබඳ සාරාංශය.",
    welcome: "YWAM කෑන්ඩියට සාදරයෙන් පිළිගනිමු",
    invitation: "වෙබ් අඩවිය තවත් සෙවීමට ආරාධනා.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'SI' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);