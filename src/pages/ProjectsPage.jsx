import React from 'react';
// Import the Projects component.  Leaving out the variant prop will render
// all projects instead of limiting the list.
import Projects from '../components/Projects';

/**
 * ProjectsPage renders the dedicated listing of all projects.
 * It contains a heading and uses the Projects component to render individual project entries.
 * This page is scrollable and visually cohesive with the rest of the site.
 */
const ProjectsPage = () => {
  return (
    <main className="projects-page">
      {/* The Projects component encapsulates its own heading and list. */}
      <Projects />
    </main>
  );
};

export default ProjectsPage;