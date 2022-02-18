import BlockContent from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function urlFor(source) {
  return urlBuilder({ projectId: "542oyksl", dataset: "production" }).image(
    source
  );
}

const serializers = {
  types: {
    image: ({ node }) => {
      return <img src={urlFor(node.asset).width(200).url()} alt="" />;
    },
  },
};

function ProjectDetails() {
  const { projects } = useContext(Context);
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
                // xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                // class="iconify iconify--bx"
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
        <div className="project-details-picture"></div>
        <div className="project-detail">
          <div className="project-detail-details">
            <h2>Problem</h2>
            <BlockContent blocks={project.details.problem} />
            {/* <p>{project.details.problem}</p> */}
          </div>
          <hr className="details-border" />
        </div>
        <div className="project-detail">
          <div className="project-detail-details">
            <h2>Goal</h2>
            <BlockContent blocks={project.details.goal} />
          </div>
          <hr className="details-border" />
        </div>
        <div className="project-detail">
          <div className="project-detail-details">
            <h2>Tech stack</h2>
            <BlockContent blocks={project.details.technologies} />
          </div>
          <hr className="details-border" />
        </div>
        <div className="project-detail">
          <div className="project-detail-details">
            <h2>Challenges</h2>
            <BlockContent
              blocks={project.details.challenges}
              projectId="542oyksl"
              dataset="production"
              serializers={serializers}
            />
          </div>
          <hr className="details-border" />
        </div>
        <div className="project-detail">
          <div className="project-detail-details">
            <h2>Lessons learned</h2>
            <BlockContent blocks={project.details.lessons} />
          </div>
          <hr className="details-border" />
        </div>
        <div className="project-detail">
          <div className="project-detail-details">
            <h2>Credits</h2>
            <BlockContent blocks={project.details.credits} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;
