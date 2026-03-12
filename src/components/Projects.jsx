import React from "react";
import { Link } from "react-router-dom";
import { projects as allProjects } from "../data/projects.js";

/**
 * Projects component.
 *
 * When provided a variant of "featured", this component displays only the
 * first two projects from the dataset and includes a call‑to‑action link to
 * view all projects.  Without a variant it lists every project.  The card
 * layout and container classes adapt based on the variant to ensure
 * appropriate spacing and styling.
 *
 * @param {Object} props
 * @param {string} [props.variant] - Pass "featured" to show a preview on the
 *   home page.  Omitting or passing any other value renders the full list.
 */
const Projects = ({ variant }) => {
  // Determine which projects to display.  A variant of "featured" limits
  // the array to the first two entries.
  const projects =
    variant === "featured" ? allProjects.slice(0, 2) : allProjects;

  // Set up class names and titles based on whether the listing is a preview.
  const sectionClass =
    variant === "featured" ? "projects-featured" : "projects";
  const listClass =
    variant === "featured" ? "featured-projects" : "project-list";
  const heading = variant === "featured" ? "Recent Projects" : "Projects";

  return (
    <section className={sectionClass} id="projects">
      <h2 className="section-title">{heading}</h2>

      <div className={listClass}>
        {projects.map((project) => {
          // Resolve the image URL relative to this module so Vite can bundle it.
          const imgUrl = new URL(`../assets/${project.image}`, import.meta.url)
            .href;
          return (
            <article key={project.slug} className="project-card">
              <Link to={project.slug}>
                <div className="project-image-wrapper">
                  <img
                    src={imgUrl}
                    alt={project.title}
                    className="project-image2"
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  {/* Show technologies only on the full projects page */}
                  {variant !== "featured" && (
                    <span className="project-tech">
                      {project.technologies.join(", ")}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

