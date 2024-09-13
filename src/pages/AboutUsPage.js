import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/aboutus.css';

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const { translations } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      '.about-us-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-us-title',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.about-us-brief',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.about-us-brief',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.section-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.leadership-staff-list',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.leadership-staff-list',
          start: 'top center+=100',
        },
      }
    );

    gsap.fromTo(
      '.about-us-details',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: '.about-us-details',
          start: 'top center+=100',
        },
      }
    );
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">{translations.aboutUs}</h1>
      <p className="about-us-brief">{translations.aboutUsBrief}</p>

      <h2 className="section-title">{translations.leadershipAndStaff}</h2>
      <ul className="leadership-staff-list">
        <li>
          <strong>{translations.baseLeader}:</strong> {translations.baseLeaderNames}
        </li>
        <li>
          <strong>{translations.staff}:</strong>
          <ul className="staff-list">
            {translations?.staffMembers?.map((staffMember, index) => (
              <li key={index}>{staffMember}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>{translations.volunteerStaff}:</strong>
          <ul className="volunteer-staff-list">
            {translations?.volunteerStaffMembers?.map((volunteer, index) => (
              <li key={index}>{volunteer}</li>
            ))}
          </ul>
        </li>
      </ul>

      <p className="about-us-details">{translations.aboutUsDetails}</p>
    </div>
  );
}

export default AboutUsPage;
