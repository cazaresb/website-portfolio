import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

/**
 * Home page layout orchestrator.
 *
 * The landing page is structured with a full‑width hero followed by a grid
 * containing the About and Recent Projects panels.  The grid collapses to a
 * single column on smaller screens.  A contact section follows and
 * remains full width to maintain clear separation from the grid content.
 */
const Home = () => {
  return (
    <>
      {/* Hero banner */}
      <Hero />

      {/* Main content grid.  The container class centers the grid within the page */}
      <section className="home-main">
        <div className="home-grid container">
          <About />
          {/* Show only the first two projects on the home page */}
          <Projects variant="featured" />
        </div>
      </section>

      {/* When showing only a preview, include a CTA button to view all projects */}

      {/* Full width contact section */}
      <Contact />
    </>
  );
};

export default Home;

