function SkillsList({ skills }) {
  return (
    <section className="skills-list">
      {skills.map((skill, idx, array) => {
        const startDate = new Date(skill.startTime);
        const years = Math.floor((Date.now() - startDate.getTime())/(365*24*3600*1000));

        return (
          <div key={skill.name} className="skill">
            <div className="skill-info">
              <p className="skill-name">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </p>
              <p>{years === 0 ? `<1 year` : `${years}+ years`}</p>
            </div>
            {idx !== array.length - 1 && <hr className="skill-separator" />}
          </div>
        );
      })}
    </section>
  );
}

export default SkillsList;
