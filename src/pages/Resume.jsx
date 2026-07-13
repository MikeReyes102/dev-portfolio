import ResumeHeader from "../sections/resume/ResumeHeader";
import Experience from "../sections/resume/Experience";
import Skills from "../sections/resume/Skills";
import Certifications from "../sections/resume/Certifications";
import Education from "../sections/resume/Education";

import "../sections/resume/resume.css";

function Resume() {
  return (
    <>
      <ResumeHeader />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
    </>
  );
}

export default Resume;