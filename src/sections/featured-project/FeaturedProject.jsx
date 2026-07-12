import FeedCard from "../../components/feed/FeedCard";

export default function FeaturedProject() {
  return (
    <FeedCard
      title="Featured Project"
      subtitle="Something I've built"
    >
      <h3>
        Landing Page Generator
      </h3>

      <p>
        A React application designed to streamline the creation of
        reusable landing pages through templates and automation.
      </p>
    </FeedCard>
  );
}