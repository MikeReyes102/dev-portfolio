import resumeData from "../../data/resume.json";

function Certifications() {

  const { certifications } = resumeData;

  return (
    <section className="resume-section">

      <h2>
        Certifications & Credentials
      </h2>


      <ul className="certification-list">

        {certifications.map((item) => (

          <li key={item}>
            {item}
          </li>

        ))}

      </ul>

    </section>
  );
}

export default Certifications;