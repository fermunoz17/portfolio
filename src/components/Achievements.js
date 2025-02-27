import React from 'react';
import './Achievements.css';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


function Achievements() {
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
                delay: custom * 0.1,
                duration: 1.0
            }
        })
    };

    const cards = [
        { imgSrc: "/images/ai_hackathon.png", title: "2024 Smart Cities AI Hackathon", text: "1st place at the 2024 Smart Cities AI Hackathon with Daniel Fuentes, Andre Salamanca, and Diego Aviles", link: "https://www.linkedin.com/posts/salamanca056_honored-to-share-that-our-team-was-awarded-activity-7178905614251687937-qGyS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrezWgBaSpqp9yyVIOhpqGtI4HFQzp2tNQ" },
        { imgSrc: "/images/SSTEM.png", title: "S-STEM Scholarship Recipient", text: "Recipient of the NSF S-STEM Scholarship.", link: "https://www.linkedin.com/posts/utep-cs_on-november-22-2024-the-utep-computer-activity-7287514349814927360-SaCA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrezWgBaSpqp9yyVIOhpqGtI4HFQzp2tNQ" },
        { imgSrc: "/images/GMiS-Scholar.png", title: "2023 GMiS Scholar", text: "Recipeient of the 2023 GMiS Scholarship.", link: "/images/GMiS-Scholar.png" },
        { imgSrc: "/images/IEEE_Award.png", title: "3rd place IEEE Green Technologies Student Poster Competition", text: "3rd place winner for the 2023 IEEE Green Technologies, undergraduate Student Poster Competition.", link: "images/IEEE_Award.png" },
        { imgSrc: "/images/GMIS_2022.png", title: "2nd Place Undergraduate Student Poster Competition", text: "2nd place winner for the 2022 Research Posters Competition in undergraduate computing category.", link: "/images/GMIS_2022.png" },
    ];

    return (
        <div className="achievements-container">
            <div className="row">
                {cards.map((card, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <Card.Img variant="top" src={card.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                    <Button variant="primary" onClick={() => window.open(card.link, '_blank')}>
                                        View
                                    </Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
