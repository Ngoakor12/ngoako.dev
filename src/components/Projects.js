import ProjectsList from "./ProjectsList";
import { useEffect, useContext } from "react";
import { Context } from "../Context";
import SkipButton from "./SkipButton";

function Projects() {
  const { setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle("Projects | Ngoako Ramokgopa");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="section-wrapper">
      <SkipButton skipTo={"skills"} />     
      <section className="projects" id="projects">
        <header className="projects-header">
          <h2 className="projects-header-title">Projects</h2>
          <p className="projects-header-description">
            These are some of the projects that showcase some of my skills.{" "}
            <a
              href="https://github.com/Ngoakor12"
              target="_blank"
              rel="noreferrer"
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
