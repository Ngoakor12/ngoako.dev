import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <section className="projects" id="projects">
      <header className="projects-header">
        <h2 className="projects-header-title">Projects</h2>
        <p className="projects-header-description">
          These are some of the projects that showcases my skills. View more on
          my github.
        </p>
      </header>
      <ProjectsList />
    </section>
  );
}

export default Projects;
