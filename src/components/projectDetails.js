import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  return (
    <>
      {/* <Navigation /> */}
      {/* <project projectData={project} /> */}
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
