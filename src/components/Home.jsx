import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

// Home page component that aggregates the main sections of the site.
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;