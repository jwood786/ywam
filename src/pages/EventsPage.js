import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/EventsPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const EventsPage = () => {
  const { translations } = useLanguage(); // Access the translations from context
  const eventsPage = translations.eventsPage; // Get the translations for the Events Page

  useEffect(() => {
    gsap.fromTo(
      '.events-container h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.events-container h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.events-container p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.events-container p',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.event-list .event',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.event-list',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="events-container">
      <h1>{eventsPage.title}</h1>
      <p>{eventsPage.description}</p>
      <div className="event-list">
        {eventsPage.eventList.map((event, index) => (
          <div className="event" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
