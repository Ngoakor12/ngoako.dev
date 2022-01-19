import PrimaryButton from "./PrimaryButton";
import LiveButton from "./LiveButton";
import CodeButton from "./CodeButton";

function ProjectButtons() {
  return (
    <article className="project-btns">
      <PrimaryButton>View project</PrimaryButton>
      <div className="secondary-btns">
        <LiveButton />
        <CodeButton />
      </div>
    </article>
  );
}

export default ProjectButtons;
