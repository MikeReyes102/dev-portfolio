import "./project-card.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">

          {project.tech.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}

        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;