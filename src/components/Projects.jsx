import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import ProjectCard from './ProjectCard';

// Data for the projects to display. Each object represents a project.
const projectData = [
  {
    title: 'Software Testing Agent',
    description:
      'An intelligent agent (using MCTS) that automatically generates, executes, and iterates on test cases to achieve maximum code coverage.',
    image: project1,
    // Link to the dedicated project page
    link: '/software-testing-agent',
  },
  {
    title: 'Memory Management System',
    description:
      'Inspired by Optimized C++, this system uses custom allocators & deallocators to reduce fragmentation and improve performance.',
    image: project2,
    // Link to the dedicated project page
    link: '/memory-system',
  },
];

// Projects section that maps over projectData and renders a ProjectCard for each item.
const Projects = () => (
  <section id="projects" className="projects">
    <h2>Recent Projects</h2>
    <div className="project-list">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;