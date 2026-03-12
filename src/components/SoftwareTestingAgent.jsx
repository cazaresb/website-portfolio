import React from "react";
import projectImage from "../assets/project1.png";

// Page showcasing details for the Software Testing Agent project.
const SoftwareTestingAgent = () => {
  return (
    <section className="project-page">
      <section className="section project-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Overview</h2>
          </div>

          <div className="content-block card">
            <div className="project-media">
              <img src={projectImage} alt="Software Testing Agent project" />
            </div>

            <p className="section-text">
              An intelligent agent (using MCP) that automatically generates,
              executes, and iterates on test cases to achieve maximum code
              coverage. This project combines modern AI-assisted development
              with traditional software engineering practices and is fully
              integrated using VSCode&apos;s Chat features.
            </p>

            <h3 className="content-title">Features</h3>
            <ul className="feature-list">
              <li>Built on Node.js, Maven, and JUnit for testing.</li>
              <li>JaCoCo coverage report artifact creation.</li>
              <li>
                Model Context Protocol servers for development automation.
              </li>
              <li>
                GitHub workflow for automatic creation and upload of artifacts.
              </li>
              <li>
                Custom automation tools for software development workflows:
                <strong> AI Code Review Agent</strong> and
                <strong> Specification-Based Testing Generator</strong>.
              </li>
              <li>
                Quality Metrics Dashboard that provides comprehensive coverage
                reports that improve over time.
              </li>
            </ul>
            <br></br>
            <p className="section-text">
              This project aims to speed up the development process with strong
              software engineering principles, making it applicable to
              real-world development scenarios with the help of the software
              testing agent.
            </p>

            <p className="section-text">
              As a small demo, this repository contains a run on a Java utility
              codebase under the directory <code>/codebase</code>.
            </p>

            <h3 className="content-title">Automated Test Improvement</h3>
            <p className="section-text">
              The agent provides automatic test enhancement based on coverage
              gaps.
            </p>
            <p className="section-text">
              The agent handles test failures with debugging and fix generation.
            </p>
            <p className="section-text">
              The agent tracks coverage at each iteration of improvement.
            </p>

            <h3 className="content-title">Quality Metrics Dashboard</h3>
            <p className="section-text">
              The agent keeps track of its progress as it generates and improves
              tests by tracking test quality metrics such as assertions per
              test, edge case coverage, and bug fixes.
            </p>

            <p className="section-text">
              For example, for each improvement in coverage or bug fixes, a
              commit is made to GitHub by the agent.
            </p>

            <p className="section-text">
              Whenever the agent makes a commit to the repository, it executes
              the <code>generate-quality-metrics-dashboard</code> job.
            </p>

            <p className="section-text">
              The following files are created during workflow execution:
            </p>
            <ul className="feature-list">
              <li>
                <code>testing-metrics.json</code> instruction and branch
                coverage counts plus percentage metadata for the MCP agent.
              </li>
              <li>
                <code>testing-dashboard.md</code> summarizes coverage and run
                information, including assertions, edge cases, and bugs fixed.
              </li>
            </ul>
            <br></br>
            <p className="section-text">
              You can find the dashboard file under{" "}
              <code>.github/testing-dashboard.md</code>.
            </p>

            <h4 className="content-title">
              Specification-Based Testing Generator
            </h4>
            <p className="section-text">
              The agent performs boundary value analysis and generates
              equivalence class test cases.
            </p>

            <h4 className="content-title">AI Code Review Agent</h4>
            <p className="section-text">
              This feature is planned for a later build.
            </p>

            <h3 className="content-title">Output</h3>
            <p className="section-text">
              The following files are created at execution of the workflow job:
            </p>
            <ul className="feature-list">
              <li>
                <code>testing-metrics.json</code> — instruction and branch
                coverage counts and percentage metadata for the MCP agent.
              </li>
              <li>
                <code>testing-dashboard.md</code> — summarizes coverage and run
                information on test quality details such as assertions, edge
                cases, and bugs fixed.
              </li>
            </ul>
            <br></br>
            <p className="section-text">
              You can find the dashboard file under{" "}
              <code>.github/testing-dashboard.md</code>.
            </p>

            <a
              href="https://github.com/cazaresb/Software_Testing_Agent"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the repo
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SoftwareTestingAgent;
