import React from 'react';
import ProjectList from '../components/ProjectList';

/**
 * ProjectsPage renders the dedicated listing of all projects.
 * It contains a heading and uses ProjectList to render individual project entries.
 * This page is scrollable and visually cohesive with the rest of the site.
 */
const ProjectsPage = () => {
  return (
    <main className="projects-page">
      <section className="projects">
        <h2 className="section-title">Projects</h2>
        <p className="section-intro">
          Below you&#39;ll find a collection of my recent work. Each project highlights
          different technologies and areas of expertise.
        </p>
        <ProjectList />
      </section>
    </main>
  );
};

export default ProjectsPage;