import FeedCard from "../../components/feed/FeedCard";

export default function About() {
  return (
    <FeedCard
      title="About Me"
      subtitle="Driven by curiosity, creativity, and the desire to build."
    >
      <div className="about-content">

        <p>
          I'm a developer and application support engineer who enjoys figuring
          out how things work, solving problems, and building tools that make
          life a little easier. My career has taken me through different
          industries and roles, but the common thread has always been curiosity
          and a desire to improve the way things are done.
        </p>
        <br />

        <p>
          Today, I work as a Junior Support Engineer II supporting enterprise
          automation platforms, where I troubleshoot complex application issues,
          investigate databases and integrations, and collaborate with teams to
          keep systems running reliably. That experience has shaped the way I
          approach development — understanding the problem, thinking about the
          user, and building solutions that work in the real world.
        </p>

        <br />

        <p>
          Outside of technology, I'm always looking for ways to learn, create, and
          challenge myself. Music has always been a big part of my life, whether I'm
          playing guitar or discovering something new to listen to. I enjoy pushing
          myself physically and mentally through fitness, experimenting in the
          kitchen, and taking on new projects just to see what I can build.
        </p>
        <br />

        <p>
          Most importantly, I enjoy spending time with my family. Whether I'm working
          on and racing minibikes with my wife, making memories with my two daughters,
          or chasing around our puppy, those moments keep me grounded and remind me
          that curiosity and creativity extend far beyond the screen.
        </p>

      </div>
    </FeedCard>
  );
}