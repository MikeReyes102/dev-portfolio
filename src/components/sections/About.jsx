import '../../styles/About.css';

const About = () => {
    return (

        <section id="about" className="section">
            <div className="container about-container">
                <h2>About Me</h2>

                <div className="about-content">
                    <p>
                        I’m Michael, a full stack developer with a focus on C#/.NET and React.
                        I enjoy building secure, scalable systems and clean user interfaces.
                    </p>

                    <p>
                        I approach projects with attention to detail and a focus on maintainable
                        code. I’m always learning, experimenting with new technologies, and
                        pushing the limits of what I can build.
                    </p>

                    <p>
                        When I’m not coding, you might find me designing new workflows, tinkering
                        with personal projects, or hitting the gym to clear my head.
                    </p>

                    <a href="#contact" className="btn btn-primary">Get in Touch</a>
                </div>
            </div>
        </section>
    )
}

export default About;