import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/" className="footer-logo-link">
              <span className="footer-logo-text">JZ</span>
            </Link>
            <p className="footer-tagline">Software Engineer</p>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h3 className="footer-heading">Navigation</h3>
              <ul className="footer-nav-list">
                <li><Link to="/" className="footer-nav-link">Home</Link></li>
                <li><Link to="/about" className="footer-nav-link">About</Link></li>
                <li><a href="/CV.pdf" className="footer-nav-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><Link to="/projects" className="footer-nav-link">Projects</Link></li>
                <li><Link to="/contact" className="footer-nav-link">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-social">
              <h3 className="footer-heading">Connect</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/juliawiktoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/juliawiktoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.instagram.com/tevsk.jsolk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.strava.com/athletes/42804754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Strava"
                >
                  <FontAwesomeIcon icon={faStrava} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Julia Zieba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
