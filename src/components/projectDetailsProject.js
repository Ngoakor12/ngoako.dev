import ProjectDetailsButtons from "./ProjectDetailsButtons";

function Project({ projectData }) {
  return (
    <article key={projectData.title} className="project">
      <div className="project-picture-wrapper">
        <div className="project-picture"></div>
      </div>
      <div className="project-details-wrapper">
        <h3 className="project-title">{projectData.title}</h3>
        <p className="project-description">{projectData.description}</p>
        <article className="technologies">
          {projectData.technologies.map((technology) => {
            return (
              <div key={technology} className="technology">
                {technology}
              </div>
            );
          })}
        </article>
        <ProjectDetailsButtons project={projectData}/>
      </div>
    </article>
  );
}

export default Project;
