import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../AppContext";
import { backArrowIcon, liveIcon, codeIcon } from "../svgs";
import { PortableText } from "@portabletext/react";
import { PAGE_TITLE } from "../constants";

function ProjectDetails() {
  const { projects, urlFor, setPageTitle, isDefaultLink } = useContext(Context);
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projects?.find((project) => project.slug?.current === slug);

  useEffect(() => {
    if (project) setPageTitle(`${project.title} | Project`);
    else setPageTitle(PAGE_TITLE.DEFAULT)
  }, [project, setPageTitle]);

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
                  href={isDefaultLink(project.links?.live)}
                  className={`live-site ${isDefaultLink(project.links?.live) === "#"
                    ? "disabled-link"
                    : ""
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Live project
                  <span className="live-icon">{liveIcon}</span>
                </a>
                <hr className="link-border" />
              </div>
              <div className="project-link">
                <a
                  href={isDefaultLink(project.links?.code)}
                  className={`source-code ${isDefaultLink(project.links?.code) === "#"
                    ? "disabled-link"
                    : ""
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
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
          {project.details?.map(
            (detail, index, array) =>
              detail.body.length && (
                <div className="project-detail" key={`${detail.name}_${index}`}>
                  <div className="project-detail-details">
                    <h2>{detail.name}</h2>
                    <div>
                      <PortableText value={detail.body} />
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
