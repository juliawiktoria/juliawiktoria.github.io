import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
          year={project.year}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default Projects;