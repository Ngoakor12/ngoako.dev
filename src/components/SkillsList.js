function SkillsList({ skills }) {
  return (
    <section className="skills-list">
      {skills.map((skill, idx, array) => {
        return (
          <div key={skill.name} className="skill">
            <p className="skill-name">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </p>
            {idx !== array.length - 1 && <hr className="skill-separator" />}
          </div>
        );
      })}
    </section>
  );
}

export default SkillsList;
