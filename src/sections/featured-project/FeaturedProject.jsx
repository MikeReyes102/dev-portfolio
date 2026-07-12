import featuredProjects from "../../data/featured-projects-list.json";

import FeedCard from "../../components/feed/FeedCard";

import "./featured-project.css";

function getRandomProject() {
  const index = Math.floor(
    Math.random() * featuredProjects.length
  );

  return featuredProjects[index];
}

export default function FeaturedProject() {

  const project = getRandomProject();

  return (
    <FeedCard
      title="Featured Project"
      subtitle="Where curiosity becomes creation."
    >

      <article className="featured-project">

        <div className="featured-project-image">
          <img
            src={`/${project.image}`}
            alt={project.title}
          />
        </div>


        <div className="featured-project-content">

          <h3>
            {project.title}
          </h3>

          <p>
            {project.description}
          </p>


          <div className="featured-project-tech">

            {project.tech.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}

          </div>


          <div className="featured-project-actions">

            {project.live && (
              <a
                href={project.live}
                className="btn btn-primary"
              >
                View Project
              </a>
            )}


            <a
              href={project.github}
              className="btn btn-outline"
            >
              GitHub
            </a>

          </div>

        </div>

      </article>

    </FeedCard>
  );
}