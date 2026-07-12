import FeedCard from "../../components/feed/FeedCard";

export default function CurrentFocus() {
  return (
    <FeedCard
      title="Current Focus"
      subtitle="What I'm working on now"
    >
      <ul>
        <li>Developer Portfolio V2</li>
        <li>NDS Tool Belt</li>
        <li>Project Generator</li>
      </ul>
    </FeedCard>
  );
}