import '../../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-card">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
                My name is Michael Reyes-Casanova. I'm a full-stack developer based in Virginia Beach, VA and a graduate of ECPI University. I have a passion for building applications that solve real-world problems and create meaningful user experiences.
            </p>
            <p>
                I have experience working with a variety of technologies, including JavaScript, React, Node.js, and MongoDB. I'm always eager to learn new tools and frameworks to stay up-to-date with the latest trends in web development.
            </p>
            <p>
              When I'm not coding, I enjoy hanging out with my family, listening to records, and watching soccer. 
            </p>
          </div>
          <div className="about-image">
            <img src="/images/about-me.jpg" alt="Michael Reyes-Casanova" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About