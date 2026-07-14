import "../../styles/sidebar.css";

export default function ProfileSidebar() {
  return (
    <aside className="profile-card">

      <div className="profile-cover">

      </div>


      <div className="profile-header">

        <div className="profile-avatar">
          <img
            src="/images/about-me.jpg"
            alt="Michael Reyes-Casanova"
          />
        </div>


        <div className="profile-content">

          <h2>
            Michael Reyes-Casanova
          </h2>

          <p className="profile-title">
            Junior Support Engineer II
          </p>

          <p>
            Application support engineer and developer driven by curiosity,
            creativity, and the challenge of building reliable solutions
            across the stack.
          </p>

        </div>

      </div>


      <div className="profile-details">

        <div className="profile-detail">
          <span>📍</span>
          Virginia Beach, VA
        </div>

        <div className="profile-detail">
          <span>💻</span>
          C#/.NET • MERN • SQL
        </div>

        <div className="profile-detail">
          <span>⚙️</span>
          Application Engineering • Production Support
        </div>

      </div>


      <div className="profile-links">

        <a href="https://github.com/MikeReyes102" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/michaelreyescasanova/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>

      </div>


    </aside>
  );
}