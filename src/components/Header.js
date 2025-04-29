import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">JZ</span>
        </Link>

        <div className="mobile-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/CV.pdf"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
