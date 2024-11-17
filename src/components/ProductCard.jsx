import React from "react";
import { Button, Card } from "react-bootstrap";


export default function ProductCard({ title, description, ProductImg, id }) {
  return (
    <Card className="shadow-lg">
      <Card.Img variant="top" src={ProductImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
