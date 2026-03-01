import React from 'react';

// Card component to display individual project details. Accepts image, title,
// description, and an optional link.
const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} className="project-link">
          View Project
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;