import "../../styles/sidebar.css";

export default function ProfileSidebar() {
  return (
    <div className="profile-card">

      <div className="profile-cover">
        Cover
      </div>


      <div className="profile-avatar">
        Image
      </div>


      <div className="profile-content">

        <h2>
          Name
        </h2>

        <p>
          Title
        </p>

      </div>


      <div className="profile-details">

        <p>
          Location
        </p>

        <p>
          Skills
        </p>

      </div>


    </div>
  );
}