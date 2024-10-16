import React from "react";
import '../App.css'
import '../EventCard.css'
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from "../Navbar";
import EventCard from "../EventCard";
import HeroSection from "../Herosection";
import Footer from "../Footer";

const LandingTeacher = () => {
  const events = [
    {
      title: "Event 1",
      date: "October 1, 2024",
      description: "Details of the first past event.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Event 2",
      date: "September 15, 2024",
      description: "Details of the the second event.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Event 3",
      date: "August 30, 2024",
      description: "Details of the third past event.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Event 4",
      date: "July 20, 2024",
      description: "Details of the fourth event.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSection/>
      <Container className="my-4">
        <Row>
          {events.map((event, index) => (
            <Col key={index} sm={12} md={6} lg={3} className="mb-4">
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default LandingTeacher;
