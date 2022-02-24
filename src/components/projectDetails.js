import BlockContent from "@sanity/block-content-to-react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function ProjectDetails() {
  const { projects, urlFor, serializers } = useContext(Context);
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projects.find((project) => project.slug.current === slug);

  return (
    <>
      <section className="project-details">
        <header className="project-details-header">
          <button onClick={() => navigate(-1)} className="projects-back-btn">
            <span className="projects-back-btn-icon">
              <svg
                aria-hidden="true"
                role="img"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Back to projects
          </button>
          <h1 className="project-details-heading">{project.title}</h1>
          <p className="project-details-description">{project.description}</p>
          <div className="project-links">
            <div className="project-link">
              <a href={project.links.live} className="live-site">
                Live project
                <span className="live-icon">
                  <svg
                    aria-hidden="true"
                    role="img"
                    width="28"
                    height="28"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </g>
                  </svg>
                </span>
              </a>
              <hr className="link-border" />
            </div>
            <div className="project-link">
              <a href={project.links.code} className="source-code">
                Code repository
                <span className="code-icon">
                  <svg
                    aria-hidden="true"
                    role="img"
                    width="28"
                    height="28"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 18l6-6l-6-6"></path>
                      <path d="M8 6l-6 6l6 6"></path>
                    </g>
                  </svg>
                </span>
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
      </section>
    </>
  );
}

export default ProjectDetails;
