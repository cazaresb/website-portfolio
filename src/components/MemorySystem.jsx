import React from "react";
import projectImage from "../assets/project2.png";

// Page showcasing details for the Memory Management System project.
const MemorySystem = () => {
  return (
    <section className="project-page">
      <h2>Memory Management System</h2>
      <p>
        Written for my optimized C++ class, this project used a number of
        optimized programming tricks to write a fast memory management system.
        <br></br>
        <br></br>
        This takes me back to my systems courses. Here, I implemented the malloc
        and free functions. Blocks of memory within the heap are properly and
        efficiently coalesced using clever pointer arithmetic, with an
        underlying, lightweight headers coupled with a LL structure for linking.
        <br></br>
        Ultimately, when compared with the Windows library, my simple memory
        management system beats it out by 2.5x.
      </p>
      {/* Media placeholder for a diagram or screenshot. Replace the src with your own media. */}
      <div className="project-media">
        <img src={projectImage} alt="Memory Management System project" />
      </div>
    </section>
  );
};

export default MemorySystem;

