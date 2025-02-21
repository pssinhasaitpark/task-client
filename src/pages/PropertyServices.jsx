import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLoanImg from "../assets/img/homeLoanImg.webp";
import homeInteriorsImg from "../assets/img/homeInteriorsImg.jpg";

const services = [
  {
    id: 1,
    title: "Best Home Loan Deals",
    description: "Compare & choose from 34+ banks to get the best home loan deal",
    image: homeLoanImg,
  },
  {
    id: 2,
    title: "Home Interiors",
    description: "Transform your space with our trusted Decor partners",
    image: homeInteriorsImg,
  },
];

const PropertyServices = () => {
  return (
    <Container className="my-5">
      {/* Section Title */}
      <h4 className="fw-bold">
        Property Services
        <span className="border-bottom border-warning ms-2"></span>
      </h4>

      {/* Service Cards */}
      <Row className="mt-4">
        {services.map((service) => (
          <Col key={service.id} md={6} className="mb-3">
            <Card className="border-0 shadow-sm h-100 service-card">
              <Card.Img variant="top" src={service.image} className="rounded-top" />
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertyServices;
