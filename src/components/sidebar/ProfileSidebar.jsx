import "../../styles/sidebar.css";

export default function ProfileSidebar() {
  return (
    <div className="profile-card">

      <div className="profile-image">
        <div className="image-placeholder">
          Photo
        </div>
      </div>

      <div className="profile-info">

        <h2>
          Michael Reyes-Casanova
        </h2>

        <p>
          Software Developer
        </p>

      </div>

      <div className="profile-meta">

        <p>
          React • C# • Full Stack Development
        </p>

      </div>

    </div>
  );
}