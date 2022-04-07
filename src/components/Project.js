import ProjectButtons from "./ProjectButtons";
import { individualTypeIcon } from "../svgs";
import { groupTypeIcon } from "../svgs";

function Project({ project, urlFor }) {
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
          <span className="project-type">
            {(project.type !== undefined) && (project.type === "individual" ? individualTypeIcon: groupTypeIcon) }
          </span>
        </div>
        <p className="project-description">{project.description}</p>
        <article className="technologies">
          {project.technologies.map((technology) => {
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
    <p>Loading 2...</p>
  );
}

export default Project;
