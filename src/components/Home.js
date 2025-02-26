// File: src/components/Home.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import to navigate programmatically

import React from 'react';
import './Home.css'; // Make sure to create this CSS file
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap



const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <p>{displayText}</p>;
};


function Home() {
    const navigate = useNavigate();

    return (
        <div id="home">
            <div class="context">
                <h1>Fernando Muñoz</h1>
                <h2>Rising Software Engineer.</h2>
                <Button variant="outline-primary" href="/about" className="m-2" size="lg">
                    Learn More
                </Button>
            </div>

            <div class="area">
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;