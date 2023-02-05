import ProjectsList from "./ProjectsList";
import SkipSectionButton from "./SkipSectionButton";

function Projects() {

  return (
    <div className="section-wrapper">
      <SkipSectionButton skipTo={"skills"} children={"Skip Projects"} />
      <section className="projects" id="projects">
        <header className="projects-header">
          <h2 className="projects-header-title">Projects</h2>
          <p className="projects-header-description">
            These are some of the projects that showcase some of my skills.{" "}
            <a
              href="https://github.com/Ngoakor12"
              target="_blank"
              rel="noopener noreferrer"
            >
              View more on my github.
            </a>
          </p>
        </header>
        <ProjectsList />
      </section>
    </div>
  );
}

export default Projects;
