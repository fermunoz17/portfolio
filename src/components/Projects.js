import React, { useState, useEffect } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const projects = [
        {
            title: "News Article Deviation Analysis",
            subtitle: "Python | scikit-learn | GitHub",
            text: "This project measures how much individual news articles deviate from a consensus 'ground truth' across multiple sources. Using NewsAPI for article aggregation and newspaper3k for text extraction, each article was transformed into semantic vector embeddings via the all-MiniLM-L6-v2 model. Named entity recognition was used to identify common facts across articles, which formed the baseline for comparison. Cosine similarity was applied to determine deviation scores, highlighting outlier articles that may present bias or misinformation. The project emphasizes NLP, semantic analysis, and information reliability in media coverage.",
            link: "https://github.com/rvallesmar/hard_truth",
            linkTitle: "GitHub",
            collaborators: "Collaborators: Braulio Bracamontes, Rogelio Valles-Martinez",
            imgSrc: "/images/news.png"
        },
        {
            title: "Tefiti Island Resort",
            subtitle: "React | Firebase | GitHub",
            text: "Built as part of an Agile Methodologies course, this project simulates a modern island resort website with dynamic UI elements and real-time features. Developed using React and Firebase, the application reflects agile team collaboration and continuous iteration, showcasing skills in responsive design, user experience, and full-stack integration.",
            link: "https://team-2-df125.web.app/",
            linkTitle: "Application Link",
            collaborators: "Collaborators: Ivan Acedo, Angel Aguayo, Jeremiah Dean, Chelsea Moreno, Aminah Soueidan",
            imgSrc: "/images/tefiti.png"
        },
        {
            title: "Forum app",
            subtitle: "React | Firebase | GitHub",
            text: "This project is a forum application that enables users to create accounts, make posts, edit content, and like posts. It incorporates real-time notifications to keep users informed of interactions within the community. The application is designed to facilitate robust user engagement and content management, enhancing the overall user experience by providing a dynamic and interactive platform for discussions. The project's source code is available on GitHub for further development and contribution.",
            link: "https://github.com/fermunoz17/forum-app",
            linkTitle: "GitHub",
            collaborators: "Collaborators: Miguel Garcia, Luis Quiñones",
            imgSrc: "/images/forum.png"
        },
        {
            title: "Heart Disease Diagnosing Algorithm",
            subtitle: "Python | scikit-learn",
            text: "This project developed a machine learning application to facilitate the early diagnosis of heart disease, using a Decision Tree Classifier and advanced algorithms like K Nearest Neighbors and K Means Clustering. The model operates on a dataset from Kaggle, aiming to improve accuracy and provide visual explanations of the diagnostics. Designed to function offline, the application supports healthcare professionals in remote areas by enhancing diagnostic processes and offering clear, interpretable insights into patient assessments.",
            link: "https://colab.research.google.com/drive/1liInCFuryv9mAIBaJpelGc2SCrf0f6jS",
            linkTitle: "Google Collab",
            collaborators: "Collaborator: Rafael Garcia",
            imgSrc: "/images/heart.png"
        },
        {
            title: "How to Fairly Allocate Safety Benefits of Self- Driving Cars",
            subtitle: "Undergraduate Research",
            text: "In the project titled \"How to Fairly Allocate Safety Benefits of Self- Driving Cars,\" I collaborated with Dr. Vladik Kreinovich and Dr. Christian Servin to examine the ethical distribution of safety benefits between drivers and pedestrians in autonomous vehicles.Published by the University of Texas at El Paso, our research utilized mathematical models to develop decision- making strategies that minimize societal harm by equitably distributing safety advantages.This work aimed to influence the programming of autonomous vehicles to ensure fair and effective outcomes, employing various analytical tools and theoretical frameworks to tackle the complexities of safety benefit allocation in the era of self - driving technology.",
            link: "/pdfs/paper.pdf",
            linkTitle: "Paper",
            collaborators: "Co-Authors: Dr. Vladik Kreinovich, Dr. Christian Servin",
            imgSrc: "/images/car.png"
        },
        {
            title: "Gomoku",
            subtitle: "Java",
            text: "The Omok project presents a digital version of the strategic board game Gomoku, developed using Java and employing Swing for the graphical user interface. This application facilitates both player-versus-player and player-versus-CPU game modes. Utilizing advanced networking techniques through sockets, the game supports real-time multiplayer sessions over network connections, allowing players to compete against each other from different machines. The implementation incorporates event handling and network communication, providing a robust platform for developing strategic gameplay and artificial intelligence challenges.",
            link: "https://github.com/fermunoz17/Omok",
            linkTitle: "GitHub",
            imgSrc: "/images/omok.png"
        }
    ];



    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
                delay: custom * 0.3,
                duration: 1.0
            }
        })
    };

    return (
        <div>
            {projects.map((project, index) => (
                <motion.div
                    className={`card project-card ${isMobile ? 'flex-column' : (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')}`}
                    key={project.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true }}
                >
                    <img src={project.imgSrc} className="card-img-top" alt="Project" />
                    <div className="card-body project-card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{project.subtitle}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{project.collaborators}</h6>
                        <p className="card-text">{project.text}</p>
                        <a href={project.link} target='_blank' className="card-link">{project.linkTitle}</a>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Projects;
