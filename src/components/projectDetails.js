import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { projectSlug } = useParams();
  const project = projects.find((project) => project.slug === projectSlug);
  return (
    <>
      {/* <Navigation /> */}
      <project projectData={project} />
      <section>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
        <h1>Hello world from {project.title}</h1>
      </section>
    </>
  );
}

export default ProjectDetails;
