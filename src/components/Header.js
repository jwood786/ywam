import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle closing the menu
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
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
            <li><Link to="/" onClick={handleLinkClick}>{translations.home}</Link></li>
            <li><Link to="/about-us" onClick={handleLinkClick}>{translations.aboutUs}</Link></li>
            <li><Link to="/our-ministries" onClick={handleLinkClick}>{translations.ourMinistries}</Link></li>
            <li><Link to="/upcoming-courses" onClick={handleLinkClick}>{translations.upcomingCourses}</Link></li>
            <li><Link to="/get-involved" onClick={handleLinkClick}>{translations.getInvolved}</Link></li>
            <li><Link to="/prayer-points" onClick={handleLinkClick}>{translations.prayerPoints}</Link></li>
            <li><Link to="/donate" onClick={handleLinkClick}>{translations.donate}</Link></li>
            <li><Link to="/events" onClick={handleLinkClick}>{translations.events}</Link></li>
            <li><Link to="/blog-news" onClick={handleLinkClick}>{translations.blogNews}</Link></li>
            <li><Link to="/contact-us" onClick={handleLinkClick}>{translations.contactUs}</Link></li>
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
