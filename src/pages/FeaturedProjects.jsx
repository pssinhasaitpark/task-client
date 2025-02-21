import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import sarthakgalaxy from "../assets/img/sarthakgalaxy.jpg";
import DbPride from "../assets/img/Dbpride.jpg";
const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Sarthak Galaxy II",
      developer: "Sarthak Estate Developers",
      location: "Rau, Indore",
      price: "₹ 38.7 Lac onwards",
      bhk: "2 BHK Flats",
      image: sarthakgalaxy,
      marketedBy: "Marketed by Sarthak Estate Developers",
      offer: true,
    },
    {
      id: 2,
      title: "DB Pride",
      developer: "DB Infrastructure",
      location: "Talawali Chanda, Indore",
      price: "₹ 45 Lac onwards",
      bhk: "2, 3 BHK Flats",
      image: DbPride,
      marketedBy: "Marketed by DB Infrastructure",
      offer: false,
    },
  ];

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Featured Projects</h4>
        <a href="#" className="text-danger fw-semibold">
          See all Projects <FaArrowRight />
        </a>
      </div>

      <Row>
        {projects.map((project) => (
          <Col md={6} key={project.id} className="mb-3">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={project.image} className="rounded-top" />
              <Card.Body>
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <Card.Text className="text-muted">
                  by {project.developer}
                  <br />
                  {project.location}
                </Card.Text>
                <Card.Text className="small text-muted">{project.marketedBy}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{project.price}</span>
                  {project.offer && (
                    <span className="badge bg-warning text-dark px-2 py-1">OFFER</span>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
