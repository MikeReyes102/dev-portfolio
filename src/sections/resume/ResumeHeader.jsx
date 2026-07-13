import resumeData from "../../data/resume.json";

function ResumeHeader() {

  const { header } = resumeData;

  return (
    <section className="resume-header section">

      <h1>
        {header.title}
      </h1>

      <p>
        {header.summary}
      </p>

    </section>
  );
}

export default ResumeHeader;