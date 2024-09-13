import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <button className="menu-toggle" onClick={handleMenuToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/">{translations.home}</Link></li>
            <li><Link to="/about-us">{translations.aboutUs}</Link></li>
            <li><Link to="/our-ministries">{translations.ourMinistries}</Link></li>
            <li><Link to="/upcoming-courses">{translations.upcomingCourses}</Link></li>
            <li><Link to="/get-involved">{translations.getInvolved}</Link></li>
            <li><Link to="/prayer-points">{translations.prayerPoints}</Link></li>
            <li><Link to="/donate">{translations.donate}</Link></li>
            <li><Link to="/events">{translations.events}</Link></li>
            <li><Link to="/blog-news">{translations.blogNews}</Link></li>
            <li><Link to="/contact-us">{translations.contactUs}</Link></li>
          </ul>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'EN' ? 'සිංහල' : 'English'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
