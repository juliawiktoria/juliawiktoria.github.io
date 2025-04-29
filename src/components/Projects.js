import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Tasket - Gamified Task Manager",
      description: "Tasket is a gamified task manager application for small and medium sized teams in the workplace. It was designed to improve the work experience and increase productivity by introducing functionalities such as gaining experience points and auto-scheduling of jobs, as well as allowing employees to choose their responsibilities by themselves.",
      image: "/images/tasket.png",
      githubLink: "https://github.com/juliawiktoria/CS3528_project",
      year: "2020",
      technologies: ["React", "Node.js", "PostgreSQL", "Django", "RestAPI"]
    },
    {
      id: 2,
      title: "ROS Pathfinding Robot",
      description: "A robot navigation system built with ROS (Robot Operating System) that implements various pathfinding algorithms to navigate through complex environments. The project demonstrates autonomous navigation capabilities with obstacle avoidance.",
      image: "/images/tasket.png",
      githubLink: "https://github.com/juliawiktoria/ros_project",
      year: "2020",
      technologies: ["ROS", "C++", "Python"]
    },
    {
      id: 3,
      title: "Comparative analysis of mutations in Genetic Algorithm for solving TSP",
      description: "Research project analyzing different mutation operators in genetic algorithms when applied to the Traveling Salesman Problem. The study compares efficiency and convergence rates of various mutation strategies.",
      image: "/images/research_methods.png",
      githubLink: "https://github.com/juliawiktoria/CS4040-research-methods",
      paperLink: "/ga_final_paper.pdf",
      year: "2020",
      technologies: ["Python"]
    },
    {
      id: 4,
      title: "Oddle Game",
      description: "A word puzzle game inspired by Wordle but with unique gameplay mechanics. Players must guess a hidden word with limited attempts, receiving feedback on letter positions after each guess.",
      image: "/images/oddle.png",
      liveLink: "https://oddle.netlify.app/",
      year: "2023",
      technologies: ["React"]
    }
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each represents a unique challenge and learning experience.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              ref={el => projectRefs.current[index] = el}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                    </a>
                  )}
                  {project.paperLink && (
                    <a
                      href={project.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Research Paper"
                    >
                      <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-year">{project.year}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
