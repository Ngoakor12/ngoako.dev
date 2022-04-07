import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import { backArrowIcon, liveIcon, codeIcon } from "../svgs";

function ProjectDetails() {
  const {
    projects,
    urlFor,
    serializers,
    BlockContent,
    setPageTitle,
    isDefaultLink,
  } = useContext(Context);
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projects.find((project) => project.slug.current === slug);

  useEffect(() => {
    if (project) setPageTitle(`${project.title} | Project`);
    // eslint-disable-next-line
  }, [projects]);

  return (
    <section className="project-details">
      {project ? (
        <>
          <header className="project-details-header">
            <button onClick={() => navigate(-1)} className="projects-back-btn">
              <span className="projects-back-btn-icon">{backArrowIcon}</span>
              Back to projects
            </button>
            <h1 className="project-details-heading">{project.title}</h1>
            <p className="project-details-description">{project.description}</p>
            <div className="project-links">
              <div className="project-link">
                <a
                  href={isDefaultLink(project.links.live)}
                  className={`live-site ${
                    isDefaultLink(project.links.live) === "#"
                      ? "disabled-link"
                      : ""
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Live project
                  <span className="live-icon">{liveIcon}</span>
                </a>
                <hr className="link-border" />
              </div>
              <div className="project-link">
                <a
                  href={isDefaultLink(project.links.code)}
                  className={`source-code ${
                    isDefaultLink(project.links.code) === "#"
                      ? "disabled-link"
                      : ""
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Code repository
                  <span className="code-icon">{codeIcon}</span>
                </a>
                <hr className="link-border" />
              </div>
            </div>
          </header>
          <img
            className="project-details-picture"
            src={urlFor(project.mainImage.image.asset)}
            alt={project.mainImage.alt}
          />
          {project.details.map(
            (detail, index, array) =>
              detail.body.length && (
                <div className="project-detail">
                  <div className="project-detail-details">
                    <h2>{detail.name}</h2>
                    <div>
                      <BlockContent
                        blocks={detail.body}
                        projectId="542oyksl"
                        dataset="production"
                        serializers={serializers}
                      />
                    </div>
                  </div>

                  {index !== array.length - 1 && (
                    <hr className="details-border" />
                  )}
                </div>
              )
          )}
        </>
      ) : (
        <p>Loading project...</p>
      )}
    </section>
  );
}

export default ProjectDetails;
