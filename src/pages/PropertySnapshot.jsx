import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertySnapshot = () => {
  return (
    <Container className="mt-4">
      <h4 className="fw-bold">
        Bangalore Property Snapshot
        <div className="underline"></div>
      </h4>

      <Card className="p-4 shadow-sm border-0">
        <p>
          A home to about 11 million people, Bangalore, now known as Bengaluru, is India's fourth largest city after 
          Delhi, Kolkata, and Mumbai. There is no doubt about the fact that Bangalore's unique climate has always 
          attracted people to relocate from all parts of India. The climate in Bangalore is so pleasant and calming 
          that it lets you have a whale of a time. The city has become the 4th largest technology hub in the world 
          after London, Boston, and San F... <span className="text-danger fw-bold">Read more</span>
        </p>

        <Row className="text-center mt-3">
          <Col md={3}>
            <h5 className="fw-bold">916+</h5>
            <p>Low Budget Flats <br /> in Bangalore</p>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold">59702+</h5>
            <p>Properties for Sale <br /> in Bangalore</p>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold">267+</h5>
            <p>Residential Property <br /> Agents in Bangalore</p>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold">42947+</h5>
            <p>Residential Projects <br /> in Bangalore</p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PropertySnapshot;
