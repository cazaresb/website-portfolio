import React from 'react';
import heroImg from '../assets/hero.png';

// The hero section with a background image and introductory text.
const Hero = () => (
  <section id="hero" className="hero">
    <img src={heroImg} alt="Decorative placeholder" className="hero-img" />
    <div className="hero-content">
      <h1>Hi, I'm Brian Cazares</h1>
      <p>Emerging CS professional passionate about building safe, efficient software.</p>
    </div>
  </section>
);

export default Hero;