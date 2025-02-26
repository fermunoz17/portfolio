import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion'; // Import motion for animations

function Experience() {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
                delay: custom * 0.1,
                duration: 1.0
            }
        })
    };

    return (
        <section>
            <div id="experience" class="container py-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            {[{
                                imgSrc: "/images/steele.png",
                                year: "June 2021 - August 2021",
                                title: "Steele Consulting Inc.",
                                role: "Software Engineering Intern",
                                description: "Served as a dynamic full-stack intern in a highly collaborative Agile project management environment, contributing to front-end development for a cutting-edge shipping container tracking website using AngularJs and NodeJs. Assisted in the deployment of web applications utilizing Docker and Heroku, acquiring valuable insights into the intricacies of application deployment and cloud technologies."
                            }, {
                                imgSrc: "/images/cahsi.png",
                                year: "February 2022",
                                title: "Computer Alliance of Hispanic Serving Institutions",
                                role: "Undergraduate Researcher",
                                description: "Conducted the research project titled 'How to Program Fairness in Intelligent Systems: Breaking Status Quo Solutions by Using Explainable AI' alongside Dr. Servin. Conducted in-depth analysis of prevailing learning models employed in the field of Autonomous Vehicles, which contributed to a comprehensive understanding of their methodologies and limitations. Executed controlled experiments to investigate and evaluate the decision-making processes of test subjects, providing a pivotal contribution to refining our understanding of human-AI interactions in critical decision-making scenarios."
                            }, {
                                imgSrc: "/images/epcc.png",
                                year: "February 2022 - April 2024",
                                title: "EPCC Computer Science Department/First Year Experience",
                                role: "Peer Academic Coach",
                                description: "Oversaw and facilitated Computer Science Activities for a diverse cohort of over 100 students enrolled in Programming Fundamentals I & II courses. Spearheaded the registration process for more than 300 students, ensuring their participation in the highly sought-after HSI Grow with Google Career Readiness Program. Conducted extensive usability studies, harnessing quantitative data analysis to inform the refinement and enhancement of User Interface designs, resulting in improved user experiences."
                            }, {
                                imgSrc: "/images/amex.png",
                                year: "June 2024 - August 2024",
                                title: "American Express",
                                role: "Software Engineering Intern",
                                description: "Developed the user interface for an internal testing tool used within the American Express network using ReactJS, improved its usability. Added endpoints to the tool using Spring Boot and Maven, enhancing the backend functionality and facilitating integration with multiple REST APIs. Contributed to a project that emphasized continuous deployment and integration, in an Agile environment. Deployed the UI as a Docker component, which streamlined the testing process and made the tool more accessible to other engineers, leading to a 10% increase in team productivity."
                            }].map((experience, index) => (
                                <motion.div
                                    class="timeline"
                                    variants={variants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={index}
                                    viewport={{ once: true }}
                                    key={index}
                                >
                                    <div class="timeline-content">
                                        <div class="circle">
                                            <img src={experience.imgSrc} height="60%" width="60%" alt={experience.title} />
                                        </div>
                                        <div class="content">
                                            <span class="year">{experience.year}</span>
                                            <h3 class="title h4">{experience.title}</h3>
                                            <h4 class="title h4">{experience.role}</h4>
                                            <br></br>
                                            <p class="description">{experience.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
