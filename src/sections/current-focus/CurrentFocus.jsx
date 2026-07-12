import FeedCard from "../../components/feed/FeedCard";

import "./current-focus.css";

export default function CurrentFocus() {
  return (
    <FeedCard
      title="Currently Exploring"
      subtitle="Always learning. Always creating. Always improving."
    >

      <div className="current-focus">

        <section className="focus-item">
          <h3>
            Building
          </h3>

          <h4>
            Developer Portfolio V2
          </h4>

          <p>
            Redesigning my portfolio into a dynamic developer profile
            using React, reusable components, and data-driven content.
          </p>
        </section>


        <section className="focus-item">
          <h3>
            Creating
          </h3>

          <h4>
            NDS Tool Belt
          </h4>

          <p>
            A collection of utilities designed to improve my development
            workflow and make everyday tasks easier.
          </p>
        </section>


        <section className="focus-item">
          <h3>
            Outside the Code
          </h3>

          <p>
            Staying creative through music, cooking, fitness, minibikes,
            and spending time with my family.
          </p>
        </section>

      </div>

    </FeedCard>
  );
}