import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap, faBriefcase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/my_photo.png" alt="Julia Zieba" className="profile-image" />
          </div>

          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Julia, a software engineer based in Glasgow, UK. I graduated from the University of Glasgow with a BSc in Computing Science.
            </p>
            <div className="about-cta">
              <a href="/CV.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View My Resume
              </a>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">
                <FontAwesomeIcon icon={faCode} className="section-icon" />
                Skills
              </h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <ul className="skills-list">
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C++</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul className="skills-list">
                    <li>React</li>
                    <li>HTML/CSS</li>
                    <li>Redux</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul className="skills-list">
                    <li>Node.js</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">
                <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
                Education
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>University of Glasgow</h4>
                    <p className="timeline-date">2019 - 2023</p>
                    <p>BSc in Computing Science</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">
                <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
                Experience
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Software Engineer</h4>
                    <p className="timeline-date">2023 - Present</p>
                    <p>Software development role focusing on web applications.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Intern Developer</h4>
                    <p className="timeline-date">Summer 2022</p>
                    <p>Internship position developing web applications.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">
                <FontAwesomeIcon icon={faLaptopCode} className="section-icon" />
                Interests
              </h3>
              <p>
                Beyond coding, I enjoy running, hiking, and exploring new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
