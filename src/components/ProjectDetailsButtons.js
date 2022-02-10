import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import LiveButton from "./LiveButton";
import CodeButton from "./CodeButton";

function ProjectButtons({ project }) {
  return (
    <article className="project-btns">
      <PrimaryButton>
        <Link to={`projects/${project.slug}`}>View project</Link>
      </PrimaryButton>
      <div className="secondary-btns">
        <LiveButton>
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
        </LiveButton>
        <CodeButton>
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
        </CodeButton>
      </div>
    </article>
  );
}

export default ProjectButtons;
