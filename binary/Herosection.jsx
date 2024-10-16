// src/components/HeroSection.js
import React from 'react';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <section 
            className="hero text-center " 
            style={{ 
                background: 'url(https://th.bing.com/th/id/OIP.jD1vVPmbqu-1YEUgJTpNWQHaDa?rs=1&pid=ImgDetMain) no-repeat center center ',
                backgroundSize: 'cover', 
                padding: '100px 0', 
                color: 'white', 
                height:'100vh'
            }}>
            <Container>
                <h1 className="display-4">Welcome to the Teacher Portal</h1>
                <p className="lead">Empowering Educators for a Brighter Future</p>
                <p>
                    This portal serves as a comprehensive resource for teachers at our university, providing easy access to important information, past events, and educational materials.
                </p>
                <p>
                    Join us in our mission to enhance the teaching experience and improve student outcomes.
                </p>
            </Container>
        </section>
    );
};

export default HeroSection;
