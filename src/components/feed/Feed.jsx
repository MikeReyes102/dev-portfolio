import About from "../../sections/about/About";
import FeaturedProject from "../../sections/featured-project/FeaturedProject";
import CurrentFocus from "../../sections/current-focus/CurrentFocus";

import "../../styles/feed.css"

export default function Feed() {
  return (
    <div className="feed">

      <About />

      <FeaturedProject />

      <CurrentFocus />


    </div>
  );
}