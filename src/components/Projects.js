import ProjectsList from "./ProjectsList";

const projects = [
  {
    coverImg: "",
    title: "Coding Resource Finder 1",
    description:
      "An easier way to find coding related topics and projects on the ACN syllabus.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    coverImg: "",
    title: "Coding Resource Finder 2",
    description:
      "An easier way to find coding related topics and projects on the ACN syllabus.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    coverImg: "",
    title: "Coding Resource Finder 3",
    description:
      "An easier way to find coding related topics and projects on the ACN syllabus.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];

function Projects() {
  return (
    <section className="projects">
      <header className="projects-header">
        <h2 className="projects-header-title">Projects</h2>
        <p className="projects-header-description">
          These are some of the projects that showcases my skills. View more on
          my github.
        </p>
      </header>
      <ProjectsList projects={projects} />
    </section>
  );
}

export default Projects;
