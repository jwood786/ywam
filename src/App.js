import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import MinistriesPage from './pages/MinistriesPage';
import CoursesPage from './pages/CoursesPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import PrayerPointsPage from './pages/PrayerPointsPage';
import DonatePage from './pages/DonatePage';
import EventsPage from './pages/EventsPage';
import BlogNewsPage from './pages/BlogNewsPage';
import ContactUsPage from './pages/ContactUsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-ministries" element={<MinistriesPage />} />
        <Route path="/upcoming-courses" element={<CoursesPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/prayer-points" element={<PrayerPointsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog-news" element={<BlogNewsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;