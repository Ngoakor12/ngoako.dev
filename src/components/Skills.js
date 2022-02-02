import SkillsList from "./SkillsList";

const skillsData = {
  frontend: [
    { name: "HTML", icon: "😉" },
    { name: "CSS", icon: "😉" },
    { name: "JavaScript", icon: "😉" },
    { name: "ReactJS", icon: "😉" },
  ],
  backend: [
    { name: "NodeJS(Express)", icon: "😉" },
    { name: "Firebase", icon: "😉" },
    { name: "Postgresql", icon: "😉" },
  ],
  other: [
    { name: "Figma", icon: "😉" },
    { name: "Git(Github)", icon: "😉" },
    { name: "Unit testing", icon: "😉" },
  ],
};

function Skills() {
  return (
    <section className="skills">
      <header className="skills-header">
        <h2 className="skills-header-title">Skills/Technologies</h2>
        <p className="skills-header-description">
          These are some of the skills and technologies I have worked with. I’m
          always learning so picking up new technologies is something I’m open
          to doing.
        </p>
      </header>
      <section className="skills-technologies">
        <section className="skill-list-wrapper">
          <h3 className="skill-list-heading">Frontend</h3>
          <SkillsList skills={skillsData.frontend} />
        </section>
        <section className="skill-list-wrapper">
          <h3 className="skill-list-heading">Backend</h3>
          <SkillsList skills={skillsData.backend} />
        </section>
        <section className="skill-list-wrapper">
          <h3 className="skill-list-heading">Other</h3>
          <SkillsList skills={skillsData.other} />
        </section>
      </section>
    </section>
  );
}

export default Skills;
