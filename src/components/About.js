import React from 'react';
import './About.css'; // Ensure your CSS file is linked
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

function About() {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: custom => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    };

    const iconVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: custom => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    };

    const techIcons = [
        { src: `${process.env.PUBLIC_URL}/images/react.png`, alt: "React" },
        { src: `${process.env.PUBLIC_URL}/images/angular.png`, alt: "Angular" },
        { src: `${process.env.PUBLIC_URL}/images/nodejs.png`, alt: "Node.js" },
        { src: `${process.env.PUBLIC_URL}/images/java.png`, alt: "Java" },
        { src: `${process.env.PUBLIC_URL}/images/js.png`, alt: "JavaScript" },
        { src: `${process.env.PUBLIC_URL}/images/ts.png`, alt: "TS" },
        { src: `${process.env.PUBLIC_URL}/images/html.png`, alt: "HTML" },
        { src: `${process.env.PUBLIC_URL}/images/css.png`, alt: "CSS" },
        { src: `${process.env.PUBLIC_URL}/images/git.png`, alt: "GIT" }
    ];


    return (
        <div id="about" className="about-container">
            <div className="left-column">
                <img src={`${process.env.PUBLIC_URL}/images/landing_3.png`} alt="Your Name" className="profile-photo" />
                <div className="social-links">
                    <Button variant="outline-primary" href="https://github.com/fermunoz17" target="_blank" className="m-2">
                        GitHub
                    </Button>
                    <Button variant="outline-info" href="https://www.linkedin.com/in/fernan-munoz" target="_blank" className="m-2">
                        LinkedIn
                    </Button>
                </div>
                <br></br>
                <p>Email: fermunozley@gmail.com</p>
                <br></br>
                <p>
                    I hold a B.S. in Computer Science with a concentration in Software Engineering from the University of Texas at El Paso (May 2025) and am currently pursuing an M.S. in Software Engineering at UTEP. My technical foundation spans Java, TypeScript, and C, along with experience in frameworks and tools such as Node.js, Angular.js, and Docker.
                </p>
                <p>
                    My hands-on experience includes roles as a computer science peer leader at EPCC, a full-stack software engineering intern at Steele Consulting Inc., and most recently, a software engineer intern at American Express. At AMEX, I enhanced an internal testing tool using ReactJS and Spring Boot, and deployed it as a Docker component, boosting accessibility and team productivity in an Agile environment.
                </p>
                <p>
                    These experiences have not only strengthened my software development skills but also deepened my interest in designing innovative and reliable systems. As I continue my graduate studies, I’m focused on creating impactful software solutions with an eye toward AI integration and scalable architectures that solve real-world problems.

                </p>
                <br></br>
            </div>
            <div className="right-column">
                <h3>Tech Stack</h3>
                <br></br>
                <div className="tech-icons">
                    {techIcons.map((icon, index) => (
                        <motion.img
                            key={icon.alt}
                            src={icon.src}
                            alt={icon.alt}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true }}
                        />
                    ))}
                </div>
                <h3>Education</h3>
                <br></br>
                <div className="school-icons">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <motion.div
                                className="flip-card"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={1}
                                viewport={{ once: true }}
                            >
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={`${process.env.PUBLIC_URL}/images/epcc.png`} alt="El Paso Community College" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>El Paso Community College</h4>
                                        <p>Associate's in Computer Science</p>
                                        <p>August 2023</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-auto">
                            <motion.div
                                className="flip-card"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={2}
                                viewport={{ once: true }}
                            >
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={`${process.env.PUBLIC_URL}/images/utep.png`} alt="University of Texas - El Paso" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>The University of Texas at El Paso</h4>
                                        <p>Bachelor's in Computer Science</p>
                                        <p>Concentration in Software Engineering</p>
                                        <p>May 2025</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
