import React from 'react';
import projectImage from '../assets/project2.png';

// Page showcasing details for the Memory Management System project.
const MemorySystem = () => {
  return (
    <section className="project-page">
      <h2>Memory Management System</h2>
      <p>
        Inspired by my learnings in optimized C++, this custom memory management system leverages
        specialized allocators and deallocators to reduce fragmentation and improve performance. It
        demonstrates how manual memory control can yield significant speedups in certain domains.
      </p>
      {/* Media placeholder for a diagram or screenshot. Replace the src with your own media. */}
      <div className="project-media">
        <img src={projectImage} alt="Memory Management System project" />
      </div>
      <a
        href="https://github.com/username/memory-management-system"
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out the repo
      </a>
    </section>
  );
};

export default MemorySystem;