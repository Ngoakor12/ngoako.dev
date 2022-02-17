import ProjectButtons from "./ProjectButtons";

function Project({ project }) {
  return (
project?(    <article key={project.title} className="project">
      <div className="project-picture-wrapper">
        <div className="project-picture"></div>
      </div>
      <div className="project-details-wrapper">
        <h3 className="project-title">{project.title}</h3>
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
        <ProjectButtons project={project}/>
      </div>
    </article>
):<p>Loading 2...</p>  );
}

export default Project;
