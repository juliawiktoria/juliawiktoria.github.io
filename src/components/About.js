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
              Hello! I'm Julia, a software engineer based in London, UK. I'm currently working at Lendable as a Software Engineer, developing a new mobile application using Kotlin. I graduated from the University of Aberdeen with a First Class Honours BSc in Computing Science.
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
                    <li>Kotlin</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>SQL</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Frameworks</h4>
                  <ul className="skills-list">
                    <li>Symfony</li>
                    <li>ASP.NET</li>
                    <li>React</li>
                    <li>jQuery</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Other</h4>
                  <ul className="skills-list">
                    <li>Machine Learning</li>
                    <li>Supply Chain</li>
                    <li>Data Visualization</li>
                    <li>S&OP Planning</li>
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
                    <h4>University of Aberdeen</h4>
                    <p className="timeline-date">2017 - 2021</p>
                    <p>BSc in Computing Science, First Class Honours</p>
                    <p>Thesis: "Normalising Flows for Synthetic Image Generation"</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>University of Oslo</h4>
                    <p className="timeline-date">2018</p>
                    <p>Erasmus+ Exchange Student</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>VIII Maria Sklodowska High School</h4>
                    <p className="timeline-date">2014 - 2017</p>
                    <p>Advanced Mathematics, Physics, and Informatics Programme</p>
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
                    <p className="timeline-date">December 2023 - Present</p>
                    <p>Lendable, London, UK</p>
                    <p>Working on a new BE Superapp team focused on developing a new Lendable mobile application using Kotlin.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Junior Software Engineer</h4>
                    <p className="timeline-date">November 2022 - December 2023</p>
                    <p>Lendable, London, UK</p>
                    <p>Implemented features using PHP, Symfony, and Kotlin for Lendable Personal Loans product.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Supply Chain Analyst</h4>
                    <p className="timeline-date">September 2021 - October 2022</p>
                    <p>Amazon, London, UK</p>
                    <p>Managed S&OP processes and developed ML planning processes using Python and SQL.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Business Intelligence Intern</h4>
                    <p className="timeline-date">June 2021 - September 2021</p>
                    <p>Amazon, London, UK</p>
                    <p>Developed automated S&OP planning system and data visualizations.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Teaching Assistant</h4>
                    <p className="timeline-date">January 2021 - May 2021</p>
                    <p>University of Aberdeen, Aberdeen, UK</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Programming Intern</h4>
                    <p className="timeline-date">June 2019 - August 2019</p>
                    <p>University of Aberdeen, Aberdeen, UK</p>
                    <p>Developed website and database for clinical trials using HTML, jQuery, C#, and ASP.NET.</p>
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
