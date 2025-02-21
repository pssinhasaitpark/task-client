import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import project1 from "../assets/img/project1.jpg";
import project2 from "../assets/img/project2.jpg";

const projects = [
  {
    id: 1,
    title: "RAS Town",
    builder: "Sri Sai Infrastructures Pvt Ltd",
    location: "AB Road",
    bhk: "1, 2, 3 BHK Flats",
    price: "₹ 17 Lac onwards",
    marketer: "Marketed by Dreams to Realty",
    image: project1,
  },
  {
    id: 2,
    title: "Ishwari Greens",
    builder: "Manas Constructions",
    location: "Rajendra Nagar",
    bhk: "2, 3 BHK Flats",
    price: "₹ 77.4 Lac onwards",
    marketer: "Marketed by Manas Constructions",
    image: project2,
  },
];

const NewProjectGallery = () => {
  return (
    <Container className="my-5">
      {/* Title Section */}
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold">
          New Project Gallery
          <span className="border-bottom border-info ms-2"></span>
        </h4>
        <a href="#" className="text-danger fw-bold text-decoration-none">
          See all Projects →
        </a>
      </div>

      {/* Project Cards */}
      <Row className="mt-4">
        {projects.map((project) => (
          <Col key={project.id} md={6} className="mb-3">
            <Card className="border-0 shadow-sm project-card">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="rounded-start h-100"
                  />
                </Col>
                <Col md={7}>
                  <Card.Body>
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted mb-1">{project.builder}</Card.Text>
                    <Card.Text className="text-muted">{project.location}</Card.Text>
                    <Card.Text className="fw-bold">{project.bhk}</Card.Text>
                    <Card.Text className="text-primary fw-bold">{project.price}</Card.Text>
                    <Card.Text className="text-muted small">{project.marketer}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewProjectGallery;
