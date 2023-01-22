import React from "react";

function SkillsList({ skills }) {
  return (
    <section className="skills-list">
      {skills.map((skill, idx, array) => {
        const years = new Date().getFullYear() - skill.startYear;

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
