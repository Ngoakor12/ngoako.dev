import Project from "./Project";
import React, { useContext } from "react";
import { Context } from "../AppContext";

function ProjectsList() {
  const { projects, isLoading } = useContext(Context);

  return (
    <section className="project-list">
      {!isLoading ? (
        projects?.map((project) => {
          return <Project key={project.title} project={project} />;
        })
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
}

export default ProjectsList;
