// File: src/components/Home.js
import React from 'react';
import './Home.css'; // Make sure to create this CSS file
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap

function Home() {

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