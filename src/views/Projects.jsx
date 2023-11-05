import React, { useState } from "react";
import Container from "../components/Container";
import { PROJECTS } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
function Projects() {
  const [project, setProject] = useState(PROJECTS[0]);

  return (
    <div id="projects" className="project-container">
      <Container>
        <div className="projects-title">
          <h1>Personal Projects</h1>
        </div>
        <div className="projects-content">
          <div className="projects-details">
            <div className="projects-flex">
              <div className="w-[50%]">
                <div className="projects-name">
                  <div className="project-name-grid">{project.name}</div>
                  <div className="project-links">
                  <a href={project.github} target="notarget">
                    <FiGithub />
                  </a>
                  <a href={project.website} target="notarget">
                    <FiExternalLink />
                  </a>
                  </div>
                </div>
                <div className="projects-technologies">
                {project.technologies.map((tech) => (
                  <p>{tech}</p>
                ))}
                </div>
              </div>
              <div className="flex flex row flex-wrap">
                <div className="projects-highlights">{project.highlights}</div>
              
                <div className="projects-image"><img src={project.image} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="projects-list">
            {PROJECTS.map((work) => (
              <button
                className="projects-list-name"
                onClick={() => {
                  setProject(work);
                }}
                style={{
                  fontWeight: project.name === work.name ? "bolder" : "normal",
                  fontSize: project.name === work.name ? "2rem" : "1rem"
                }}
              >
                {work.name}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;