import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Context } from "../Context";
import { codeIcon, liveIcon } from "../svgs";

function ProjectButtons({ project }) {
  const { pathname } = useLocation();
  const { isDefaultLink } = useContext(Context);

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
            {liveIcon}
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
            {codeIcon}
          </a>
        </Tippy>
      </div>
    </article>
  );
}

export default ProjectButtons;
