import Project from "./Project";
import { useContext } from "react";
import { Context } from "../Context";

function ProjectsList() {
  const { projects, isLoading, urlFor } = useContext(Context);

  return (
    <section className="project-list">
      {!isLoading ? (
        projects.map((project) => {
          return (
            <Project key={project.title} project={project} urlFor={urlFor} />
          );
        })
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
}

export default ProjectsList;
