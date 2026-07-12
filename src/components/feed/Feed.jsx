import FeedCard from "./FeedCard";
import "../../styles/feed.css"

export default function Feed() {

  return (

    <div className="feed">


      <FeedCard
        title="About Me"
        subtitle="A little bit about who I am"
      >
        <p>
          Placeholder content.
        </p>
      </FeedCard>


      <FeedCard
        title="Professional Experience"
        subtitle="My career journey"
      >
        <p>
          Placeholder content.
        </p>
      </FeedCard>


      <FeedCard
        title="Education"
        subtitle="Academic background"
      >
        <p>
          Placeholder content.
        </p>
      </FeedCard>


      <FeedCard
        title="Projects"
        subtitle="Things I've built"
      >
        <p>
          Placeholder content.
        </p>
      </FeedCard>


    </div>

  );
}