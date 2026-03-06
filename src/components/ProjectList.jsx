import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

// Dynamically import project images so that Vite bundles them correctly.
// The import.meta.globEager API allows bundling of static assets at build time.
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,gif}', { eager: true, as: 'url' });

/**
 * Renders a list of projects as cards. Each project card includes an image, title,
 * short description and is wrapped in a Link to its detail page.
 * The component is designed to be easily extended with more projects by
 * modifying the projects.js data file.
 */
const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project) => {
        // Resolve image URL using the glob
        const imgUrl = images[`../assets/${project.image}`];
        return (
          <article key={project.slug} className="project-card">
            <Link to={project.slug}>
              <div className="project-image-wrapper">
                <img src={imgUrl} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <span className="project-tech">{project.technologies.join(', ')}</span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ProjectList;