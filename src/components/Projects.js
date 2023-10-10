import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <ProjectCard
        image="/my_photo.png"
        title="Project 2"
        description="Description of Project 2."
        projectLink="https://github.com/juliawiktoria/CS3026_assignment_1"
        githubLink="https://github.com/juliawiktoria/CS3026_assignment_1"
      />
      <ProjectCard
        image="/my_photo.png"
        title="Project 2"
        description="Description of Project 2."
        projectLink="https://github.com/juliawiktoria/CS3026_assignment_1"
        githubLink="https://github.com/juliawiktoria/CS3026_assignment_1"
      />
      <ProjectCard
        image="/my_photo.png"
        title="Project 2"
        description="Description of Project 2."
        projectLink="https://github.com/juliawiktoria/CS3026_assignment_1"
        githubLink="https://github.com/juliawiktoria/CS3026_assignment_1"
      />
      <ProjectCard
        image="/my_photo.png"
        title="Project 2"
        description="Description of Project 2."
        projectLink="https://github.com/juliawiktoria/CS3026_assignment_1"
        githubLink="https://github.com/juliawiktoria/CS3026_assignment_1"
      />
    </div>
  );
};

export default Projects;