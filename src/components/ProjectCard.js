// ProjectCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, projectLink, githubLink }) => {
  return (
    <div className="project-card">
      <div className="projects-icons-container">
        {projectLink && (
          <a href={projectLink} className="projects-icon-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} className="projects-icon-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        )}
      </div>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="text-container">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
