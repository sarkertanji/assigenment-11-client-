import React from "react";
import "./Destination.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Destination = ({ state }) => {
  const { _id, img, name, description, price } = state;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="card-img" variant="top" src={img} />
      <Card.Body className="card-text">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price:${price}</Card.Text>
        <Link to={`/destinations/${_id}`}>
          <Button variant="primary">Purchase Now </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Destination;
