import resumeData from "../../data/resume.json";

function Education() {

  const { education } = resumeData;

  return (
    <section className="resume-section">

      <h2>
        Education
      </h2>


      <div className="education-list">

        {education.map((item) => (

          <article
            key={`${item.school}-${item.degree}`}
            className="education-card"
          >

            <h3>
              {item.school}
            </h3>

            <p>
              {item.degree}
            </p>

            <span>
              {item.date}
            </span>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Education;