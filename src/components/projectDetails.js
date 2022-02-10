import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import ProjectDetailsProject from "./projectDetailsProject";

function ProjectDetails({ projects }) {
  const { projectSlug } = useParams();
  const project = projects.find((project) => project.slug === projectSlug);
  return (
    <>
      {/* <Navigation /> */}
      <ProjectDetailsProject projectData={project} />
      <section>
        <h1>Hello world from {project.title}</h1>
      </section>
    </>
  );
}

export default ProjectDetails;
