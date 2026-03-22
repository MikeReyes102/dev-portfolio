import '../../styles/Projects.css';
import projects from '../../data/projects-list.json';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-item ${index % 2 === 0 ? "normal" : "reverse"
                                }`}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>

                                <p className="project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </p>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-actions">
                                    <a href={project.github} className="btn btn-outline">
                                        View Code
                                    </a>

                                    {project.live && (
                                        <a href={project.live} className="btn btn-primary">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;