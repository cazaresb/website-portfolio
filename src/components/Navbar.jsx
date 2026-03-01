import React from 'react';

// A simple navigation bar for the portfolio. Contains links to each section.
const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <span className="logo">Brian Cazares</span>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#contact">Contact</a></li>
        {/* External links to GitHub and LinkedIn profiles */}
        <li>
          <a href="https://github.com/cazaresb" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brian-cazares-896700278" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;