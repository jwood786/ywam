import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/MinistriesPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const MinistriesPage = () => {
  const { translations } = useLanguage();
  const ministriesPage = translations.ministriesPage; // Access translations for the Ministries Page

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.fromTo(
      '#intro-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#intro-heading',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#intro-paragraphs',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '#intro-paragraphs',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#course-overview-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#course-overview-heading',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.course-overview-items',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.course-overview-items',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#schedule-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#schedule-heading',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#schedule-paragraphs',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '#schedule-paragraphs',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#enrollment-info-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#enrollment-info-heading',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.enrollment-info-sections',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.enrollment-info-sections',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#planting-initiatives-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#planting-initiatives-heading',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.planting-initiatives-items',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.planting-initiatives-items',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

  }, []);

  return (
    <div className="ministries-container">
      <h1 id="intro-heading">{ministriesPage.title}</h1>

      {/* DTS Course Overview */}
      <div className="ministry">
        <h2 id="course-overview-heading">{ministriesPage.dtsCourseOverview.title}</h2>
        <p>{ministriesPage.dtsCourseOverview.description}</p>
        <ul className="course-overview-items">
          {ministriesPage.dtsCourseOverview.items.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Schedule */}
      <div className="ministry">
        <h2 id="schedule-heading">{ministriesPage.schedule.title}</h2>
        <div id="schedule-paragraphs">
          {ministriesPage.schedule.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Enrollment Information */}
      <div className="ministry">
        <h2 id="enrollment-info-heading">{ministriesPage.enrollmentInformation.title}</h2>
        <p>{ministriesPage.enrollmentInformation.description}</p>
        <div className="enrollment-info-sections enrollment-form">
          {Object.entries(ministriesPage.enrollmentInformation.sections).map(([sectionKey, section]) => (
            <div key={sectionKey}>
              <p>{section.title}</p>
              <ul>
                {section.fields.map((field, index) => (
                  <li key={index}>{field}</li>
                ))}
              </ul>
            </div>
          ))}
          <button>{ministriesPage.enrollmentInformation.submitButton}</button>
        </div>
      </div>

      {/* Church Planting Initiatives */}
      <div className="ministry">
        <h2 id="planting-initiatives-heading">{ministriesPage.churchPlantingInitiatives.title}</h2>
        <p>{ministriesPage.churchPlantingInitiatives.description}</p>
        <div className="planting-initiatives-items">
          {ministriesPage.churchPlantingInitiatives.initiatives.map((initiative, index) => (
            <div key={index}>
              <h3>{initiative.name}</h3>
              <ul>
                {initiative.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
              {initiative.successStories && (
                <div>
                  <h4>{ministriesPage.churchPlantingInitiatives.successStoriesTitle}</h4>
                  {initiative.successStories.map((story, index) => (
                    <p key={index}>{story}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Participation Interest */}
      <div className="ministry">
        <p>{ministriesPage.participationInterest}</p>
      </div>
    </div>
  );
}

export default MinistriesPage;
