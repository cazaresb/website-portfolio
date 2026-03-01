import React from 'react';
import projectImage from '../assets/project1.png';

// Page showcasing details for the Software Testing Agent project.
const SoftwareTestingAgent = () => {
  return (
    <section className="project-page">
      <h2>Software Testing Agent</h2>
      <p>
        This intelligent agent automatically generates, executes, and iterates on test cases to
        achieve maximum code coverage. Built using Monte Carlo Tree Search (MCTS) techniques, it
        navigates through the codebase to uncover edge cases and potential bugs.
      </p>
      {/* Media placeholder for a demo video or image. Replace the src with your own media. */}
      <div className="project-media">
        <img src={projectImage} alt="Software Testing Agent project" />
      </div>
      <a
        href="https://github.com/cazaresb/Software_Testing_Agent"
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out the repo
      </a>
    </section>
  );
};

export default SoftwareTestingAgent;