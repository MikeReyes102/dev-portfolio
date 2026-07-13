import resumeData from "../../data/resume.json";

function Skills() {

  const { skills } = resumeData;

  return (
    <section className="resume-section">

      <h2>
        Technical Skills
      </h2>


      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            key={skill.category}
            className="skill-card"
          >

            <h3>
              {skill.category}
            </h3>


            <ul>

              {skill.items.map((item) => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;