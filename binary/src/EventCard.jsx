// EventCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ title, date, description, imageUrl }) => {
    return (
        <Card className="event-card">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Button variant="link" href="#knowmore">Know More</Button>
            </Card.Body>
        </Card>
    );
};

export default EventCard;
