import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Primary navigation bar for the portfolio.
 * Uses react-router Link for internal navigation and anchors for in-page sections.
 * External links open in a new tab.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Brian&nbsp;Cazares
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* In-page anchor links remain anchors to preserve smooth scrolling */}
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href="https://github.com/cazaresb" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/brian-cazares-896700278"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;