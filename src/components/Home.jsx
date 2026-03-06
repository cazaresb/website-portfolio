import React from 'react';
import Hero from './Hero';
import About from './About';
// Projects section replaced with a preview component that links to the full list.
import ProjectsPreview from './ProjectsPreview';
import Contact from './Contact';

// Home page component that aggregates the main sections of the site.
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <Contact />
    </>
  );
};

export default Home;