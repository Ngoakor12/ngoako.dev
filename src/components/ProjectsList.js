import Project from "./Project";
function ProjectsList({ projects }) {
  return (
    <section className="project-list">
      {projects.map((project) => {
        return <Project key={project.title} projectData={project} />;
      })}
    </section>
  );
}

export default ProjectsList;
