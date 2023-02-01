import React, { useContext } from "react";
import ProjectButtons from "./ProjectButtons";
import { individualTypeIcon } from "../svgs";
import { groupTypeIcon } from "../svgs";
import Tippy from "@tippyjs/react";
import { Project as ProjectType } from "../types/Project";
import { Context } from "../AppContext";

interface ProjectProps {
  project: ProjectType;
}

function Project({ project }: ProjectProps) {
  const { urlFor } = useContext(Context);

  return project ? (
    <article key={project.title} className="project">
      <div className="project-picture-wrapper">
        <img
          className="project-picture"
          src={urlFor(project.coverImage.image.asset)}
          alt={project.coverImage.alt}
        />
      </div>
      <div className="project-details-wrapper">
        <div className="project-title">
          <span className="title">
            <h3>{project.title}</h3>
          </span>
          <Tippy
            content={
              project.type === "individual"
                ? "Individual project"
                : "Group project"
            }
          >
            <span className="project-type">
              {project.type !== undefined &&
                (project.type === "individual"
                  ? individualTypeIcon
                  : groupTypeIcon)}
            </span>
          </Tippy>
        </div>
        <p className="project-description">{project.description}</p>
        <article className="technologies">
          {project.technologies?.map((technology) => {
            return (
              <div key={technology} className="technology">
                {technology}
              </div>
            );
          })}
        </article>
        <ProjectButtons project={project} />
      </div>
    </article>
  ) : (
    <p>Loading...</p>
  );
}

export default Project;
