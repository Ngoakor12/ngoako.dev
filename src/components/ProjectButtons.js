import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Context } from "../Context";


function ProjectButtons({ project }) {
  const { pathname } = useLocation();
  const { isDefaultLink } =
  useContext(Context);

  return (
    <article className="project-btns">
      <Link
        className="primary-btn"
        to={`${pathname === "/" ? "projects/" : ""}${project.slug.current}`}
      >
        View project
      </Link>
      <div className="secondary-btns">
        <Tippy content="Live project">
          <a
            href={isDefaultLink(project.links.live)}
            className={`live-btn ${
              isDefaultLink(project.links.live) === "#" ? "disabled-link" : ""
            }`}
            target="_blank"
            rel="noreferrer"
            data-tippy-content="Live project"
            aria-label="Live project"
            role="button"
          >
            <svg
              // aria-hidden="true"
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
          </a>
        </Tippy>
        <Tippy content="Code repository">
          <a
            href={isDefaultLink(project.links.code)}
            className={`code-btn ${
              isDefaultLink(project.links.live) === "#" ? "disabled-link" : ""
            }`}
            target="_blank"
            rel="noreferrer"
            data-tippy-content="Code repository"
            aria-label="Code repository"
            role="button"
          >
            <svg
              // aria-hidden="true"
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
          </a>
        </Tippy>
      </div>
    </article>
  );
}

export default ProjectButtons;
