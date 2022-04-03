import SkillsList from "./SkillsList";
import skillsData from "../skills-data";

function Skills() {
  return (
    <section className="skills">
      <header className="skills-header">
        <h2 className="skills-header-title">Skills/Technologies</h2>
        <p className="skills-header-description">
          These are some of the skills and technologies I have worked with. Open
          to learning more technologies as and when needed.
        </p>
      </header>
      <section className="skills-technologies">
        <section className="skill-list-wrapper">
          <h3 className="skill-list-heading">Frontend</h3>
          <SkillsList skills={skillsData.frontend} />
        </section>
        <section className="skill-list-wrapper">
          <h3 className="skill-list-heading">Other</h3>
          <SkillsList skills={skillsData.other} />
        </section>
        <section className="skill-list-wrapper">
          <h3 className="skill-list-heading">Backend</h3>
          <SkillsList skills={skillsData.backend} />
        </section>
      </section>
    </section>
  );
}

export default Skills;
