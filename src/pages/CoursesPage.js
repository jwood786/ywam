import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/CoursesPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const CoursesPage = () => {
  const { translations } = useLanguage(); // Access the translations from context
  const coursesPage = translations.coursesPage; // Get the translations for the Courses Page

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.fromTo(
      '#courses h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#courses h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.course',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.course',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.enrollment-form p',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.enrollment-form',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.enrollment-form textarea',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.enrollment-form textarea',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.enrollment-form button',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.enrollment-form button',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

  }, []);

  return (
    <div className="courses-container" id='courses'>
      <h1>{coursesPage.upcomingCourses}</h1>
      <ul>
        {coursesPage.coursesList.map((course, index) => (
          <li className="course" key={index}>
            <h2>{course.title}</h2>
          </li>
        ))}
      </ul>

      {/* The Member Care Foundations Course (MCFC) */}
      <div className="course">
        <h2>{coursesPage.mcfc.title}</h2>
        <p>{coursesPage.mcfc.description}</p>
        <ul>
          {coursesPage.mcfc.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{coursesPage.mcfc.details}</p>
        <p>{coursesPage.mcfc.resources}</p>
      </div>

      {/* Enrollment Information */}
      <div className="course">
        <h2>{coursesPage.enrollmentInformation.title}</h2>
        <p>{coursesPage.enrollmentInformation.description}</p>
        <div className="enrollment-form">
          <p>{coursesPage.enrollmentInformation.personalInformation.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.personalInformation.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.spiritualBackground.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.spiritualBackground.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.reference.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.reference.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.medicalInformation.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.medicalInformation.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.languageProficiency.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.languageProficiency.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.financialInformation.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.financialInformation.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.availability.title}</p>
          <ul>
            {coursesPage.enrollmentInformation.availability.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{coursesPage.enrollmentInformation.additionalComments.title}</p>
          <textarea rows="4"></textarea>
          <button type="submit">{coursesPage.enrollmentInformation.submitButton}</button>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
