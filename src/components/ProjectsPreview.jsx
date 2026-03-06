import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

/**
 * ProjectsPreview renders a compact preview of the first few projects on the home page.
 * It uses the projects data directly and includes a call-to-action button linking to the full projects page.
 */
const ProjectsPreview = () => {
  // Limit preview to first two projects for brevity.
  const previewProjects = projects.slice(0, 2);
  return (
    <section id="projects-preview" className="projects-preview">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-list">
        {previewProjects.map((project) => (
          <article key={project.slug} className="project-card">
            <Link to={project.slug}>
              <div className="project-image-wrapper">
                <img
                  src={new URL(`../assets/${project.image}`, import.meta.url).href}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="cta-container">
        <Link to="/projects" className="button-outline">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;