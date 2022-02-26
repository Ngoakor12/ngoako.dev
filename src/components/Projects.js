import ProjectsList from "./ProjectsList";
import { useEffect, useContext } from "react";
import { Context } from "../Context";

function Projects() {
  const { setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle("Projects | Ngoako Ramokgopa");
    // eslint-disable-next-line
  }, []);

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
