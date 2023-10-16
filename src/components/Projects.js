import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import projectsData from '../data/projects.json';

const Projects = () => {
  const sortedProjects = projectsData.sort((a, b) => b.year - a.year);

  return (
    <div className="projects-container">
      {sortedProjects.map((project) => (
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