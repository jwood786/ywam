import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import './css/BlogNewsPage.css'; // Import your custom CSS file

gsap.registerPlugin(ScrollTrigger);

const BlogNewsPage = () => {
  const { translations } = useLanguage(); // Access the translations from context
  const blogNewsPage = translations.blogNewsPage; // Get the translations for the Blog/News Page

  useEffect(() => {
    gsap.fromTo(
      '.blog-news-container h1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.blog-news-container h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.blog-news-container p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.blog-news-container p',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.blog-posts .blog-post',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.blog-posts',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="blog-news-container">
      <h1>{blogNewsPage.title}</h1>
      <p>{blogNewsPage.description}</p>
      <div className="blog-posts">
        {blogNewsPage.posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <img src={post.image} alt={post.title} className="blog-post-image" />
            <h2>{post.title}</h2>
            <p><strong>Date:</strong> {post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogNewsPage;
