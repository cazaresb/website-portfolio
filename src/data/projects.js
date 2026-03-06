// Centralized project data for the portfolio.
// This module exports an array of objects representing each project.
// Each project should provide enough metadata to drive both the listing
// pages and the individual project pages.

export const projects = [
  {
    title: 'Software Testing Agent',
    shortDescription:
      'Intelligent agent that automatically generates, executes and iterates on test cases using Monte Carlo Tree Search techniques.',
    // Route slug used for linking to the detail page
    slug: '/software-testing-agent',
    // Path to the image asset relative to the assets folder. Imported in component.
    image: 'project1.png',
    technologies: ['Python', 'MCTS', 'AI'],
    repoUrl: 'https://github.com/cazaresb/Software_Testing_Agent',
  },
  {
    title: 'Memory Management System',
    shortDescription:
      'Custom memory management system leveraging specialized allocators and deallocators to reduce fragmentation and improve performance.',
    slug: '/memory-system',
    image: 'project2.png',
    technologies: ['C++', 'Allocator', 'Performance'],
    repoUrl: null,
  },
];

export default projects;