import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

function Experience() {
    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                ease: [0.25, 0.1, 0.25, 1],
                delay: custom * 0.15,
                duration: 0.6
            }
        })
    };

    return (
        <section id="experience" className="experience-section">
            <motion.h2
                className="experience-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            {[{
                                imgSrc: "/images/steele.png",
                                imgStyle: { objectFit: "contain", padding: "24px" },
                                circleStyle: { backgroundColor: "#ffffff" },
                                year: "June 2021 – August 2021",
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
                                year: "February 2022 – April 2024",
                                title: "EPCC Computer Science Department",
                                role: "Peer Academic Coach",
                                description: "Oversaw and facilitated Computer Science Activities for a diverse cohort of over 100 students enrolled in Programming Fundamentals I & II courses. Spearheaded the registration process for more than 300 students, ensuring their participation in the highly sought-after HSI Grow with Google Career Readiness Program. Conducted extensive usability studies, harnessing quantitative data analysis to inform the refinement and enhancement of User Interface designs, resulting in improved user experiences."
                            }, {
                                imgSrc: "/images/amex.png",
                                year: "June 2024 – August 2024",
                                title: "American Express",
                                role: "Software Engineering Intern",
                                description: "Developed the user interface for an internal testing tool used within the American Express network using ReactJS, improved its usability. Added endpoints to the tool using Spring Boot and Maven, enhancing the backend functionality and facilitating integration with multiple REST APIs. Contributed to a project that emphasized continuous deployment and integration, in an Agile environment. Deployed the UI as a Docker component, which streamlined the testing process and made the tool more accessible to other engineers, leading to a 10% increase in team productivity."
                            }, {
                                imgSrc: "/images/epcc.png",
                                year: "November 2025 – Present",
                                title: "El Paso Community College",
                                role: "Statistical Research Associate",
                                description: "Applied statistical analysis and structured data processing to support research, evaluation studies, and external reporting needs. Collected, categorized, and maintained research data across institutional systems, contributed to longitudinal outcome analysis, and transformed quantitative information into clear reports and presentations for stakeholders. Leveraged tools such as Excel, Access, SPSS, SAS, and SharePoint to support data integrity, analytical workflows, and evidence-based decision-making."
                            }].map((experience, index) => (
                                <motion.div
                                    className="timeline"
                                    variants={variants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ scale: 1.02 }}
                                    custom={index}
                                    viewport={{ once: true }}
                                    key={index}
                                >
                                    <div className="timeline-content">
                                        <div className="circle" style={experience.circleStyle || {}}>
                                            <img src={experience.imgSrc} alt={experience.title} style={experience.imgStyle || {}} />
                                        </div>
                                        <div className="content">
                                            <span className="year">{experience.year}</span>
                                            <h3 className="title h4">{experience.title}</h3>
                                            <h4 className="role h5">{experience.role}</h4>
                                            <br />
                                            <p className="description">{experience.description}</p>
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
