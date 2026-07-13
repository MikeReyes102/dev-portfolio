import resumeData from "../../data/resume.json";

function Experience() {

  const { experience } = resumeData;

  return (
    <section className="resume-section">

      <h2>
        Experience
      </h2>


      <div className="experience-list">

        {experience.map((job) => (

          <article
            key={`${job.company}-${job.role}`}
            className="experience-card"
          >

            <header>

              <h3>
                {job.role}
              </h3>

              <p>
                {job.company} • {job.location}
              </p>

              <span>
                {job.date}
              </span>

            </header>


            <p>
              {job.summary}
            </p>


            <ul>

              {job.highlights.map((item, index) => (

                <li key={index}>
                  {item}
                </li>

              ))}

            </ul>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Experience;