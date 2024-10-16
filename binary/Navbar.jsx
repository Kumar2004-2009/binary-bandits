
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; 

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src="https://th.bing.com/th/id/OIP.JZpRTkIYzz_-sHYA85fkWgHaEo?rs=1&pid=ImgDetMain" 
                        alt="University Logo"
                        className="navbar-logo"
                    />
                    University Portal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#events" className="nav-item">Events</Nav.Link>
                        <Nav.Link href="#notices" className="nav-item">Notices</Nav.Link>
                        <Nav.Link href="#attendance" className="nav-item">Attendance</Nav.Link>
                        <Nav.Link href="#login" className="nav-item">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
