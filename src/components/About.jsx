import React from "react";

// About section describing the individual's background and interests.
const About = () => (
  // The about section is presented as a panel with a border and subtle
  // background.  It uses semantic HTML: headings, paragraphs and lists.

  <section>
    <h2 className="section-title">About Me</h2>
    <div className="about-panel">
      <p>
        I am an emerging software engineer and IT professional with a strong
        foundation in OOP. Recently, I have been focused on{" "}
        <b>Agile software development</b>, <b>optimized C++</b> programming, and{" "}
        <b>distributed systems</b>. Feel free to check out some of my recent
        projects below!
      </p>
      <p>
        My strongest skills are in C++ and Java, but I am also proficient in
        Python, JavaScript, and SQL. I have hands‑on experience managing IT
        infrastructure and leading teams in a professional setting.
      </p>
      <p>
        Hardware and software are my passion. If you need a proactive and
        emerging software engineer on your team with specialties in:
      </p>
      <ul>
        <li>Object‑oriented programming</li>
        <li>Computer hardware</li>
        <li>LAN and networking</li>
        <li>AV solutions</li>
        <li>Proven experience leading a team of technicians</li>
      </ul>
      <p>
        Then, we may be a good fit. <b>Please feel free to contact me below.</b>
      </p>
    </div>
  </section>
);

export default About;
