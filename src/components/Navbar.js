import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faStrava, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <a href="/" className="logo-link">
          <span className="logo-text">JULIA</span>
        </a>      
      </div>
      <div className="icons-container">
        <a href="https://www.linkedin.com/in/juliawiktoria/" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/tevsk.jsolk/" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/juliawiktoria" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.strava.com/athletes/42804754" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStrava} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;