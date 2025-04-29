import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title && subtitle && cta) {
      setTimeout(() => {
        title.classList.add('animate-in');

        setTimeout(() => {
          subtitle.classList.add('animate-in');

          setTimeout(() => {
            cta.classList.add('animate-in');
          }, 400);
        }, 400);
      }, 300);
    }
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">
            Julia Zieba
          </h1>
          <h2 ref={subtitleRef} className="hero-subtitle">
            Software Engineer | London, UK
          </h2>
          <div ref={ctaRef} className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/about" className="btn btn-outline">
              About Me
            </Link>
            <a href="/CV.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
