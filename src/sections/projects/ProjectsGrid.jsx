import projects from "../../data/projects-list.json";

import ProjectCard from "../../components/project-card/ProjectCard";

function ProjectsGrid() {

  return (
    <section className="projects-grid">

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
        />

      ))}

    </section>
  );

}

export default ProjectsGrid;