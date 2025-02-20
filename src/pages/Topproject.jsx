import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import home2 from "../assets/img/home2.jpeg";
import home3 from "../assets/img/home3.jpeg";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Royal Greens",
    developer: "Man Developments",
    location: "Niranjanpur, Indore",
    type: "2, 3 BHK Flats",
    price: "₹ 57.8 Lac onwards",
    marketer: "Marketed by Man Developments",
    image: home2,
  },
  {
    id: 2,
    title: "JRK Summit",
    developer: "Jai Ambey Builders",
    location: "Scheme No 54, Indore",
    type: "Shops",
    price: "₹ 70.1 Lac onwards",
    marketer: "Marketed by Jai Ambey Builders",
    image: home3,
  },
  {
    id: 3,
    title: "Sarthak Greens",
    developer: "Sarthak Estate Developers",
    location: "Rau Road, Indore",
    type: "Residential Plots & Lands",
    price: "₹ 14.3 Lac onwards",
    marketer: "Marketed by Sarthak Estate Developers",
    image: home3,
  },
  {
    id: 4,
    title: "Sarthak Smart City",
    developer: "Sarthak Constructions",
    location: "Rau, Indore",
    type: "Residential Plots",
    price: "₹ 13.7 Lac onwards",
    marketer: "Marketed by Sarthak Constructions",
    image: home2,
  },
];

const Topproject = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-normal">Top Projects</h4>
          <Button variant="link" className="text-danger fw-bold">
            See all Projects →
          </Button>
        </div>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={3}>
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.developer}</Card.Text>
                  <Card.Text className="text-muted">{project.location}</Card.Text>
                  <Card.Text>{project.type}</Card.Text>
                  <Card.Text className="fw-bold text-danger">{project.price}</Card.Text>
                  <Card.Text className="text-muted">{project.marketer}</Card.Text>
                  <Button variant="danger">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Topproject;
