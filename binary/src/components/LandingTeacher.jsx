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
      imageUrl: "https://unmathschool.com/wp-content/uploads/2023/03/Teacher-Training-new-img.png",
    },
    {
      title: "Event 2",
      date: "September 15, 2024",
      description: "Details of the the second event.",
      imageUrl: "https://bodmaseducation.com/wp-content/uploads/2023/05/1500x900_132495-convocation.jpg",
    },
    {
      title: "Event 3",
      date: "August 30, 2024",
      description: "Details of the third past event.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvWbbYsbhjTbldVNwQFhPJ0_BgWlifbrytA&s",
    },
    {
      title: "Event 4",
      date: "July 20, 2024",
      description: "Details of the fourth event.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEIRHBfmVsyKK5StunQaFw_UuqgN0T03Rhw&s",
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
