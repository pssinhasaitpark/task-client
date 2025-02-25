import React, { useState } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PropertyOptions.css"; // Import the external CSS file

const cities = [
  "Bangalore",
  "Mumbai",
  "Hyderabad",
  "Thane",
  "Pune",
  "New Delhi",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Gurgaon",
  "Noida",
  "Navi Mumbai",
];

const properties = {
  Bangalore: {
    Flats: [
      "Flats in Whitefield",
      "Flats in Sarjapur Road",
      "Flats in Electronic City",
      "Flats in Koramangala",
      "Flats in HSR Layout",
      "Flats in Marathahalli",
      "Flats in Hebbal",
      "Flats in Kanakapura Road",
      "Flats in Bellandur",
      "Flats in Varthur",
    ],
    Houses: [
      "House for Sale in Whitefield",
      "House for Sale in HSR Layout",
      "House for Sale in JP Nagar",
      "House for Sale in Koramangala",
      "House for Sale in Sarjapur Road",
      "House for Sale in Hebbal",
      "House for Sale in Yelahanka",
      "House for Sale in Electronic City",
      "House for Sale in Marathahalli",
      "House for Sale in Bellandur",
    ],
    Properties: [
      "Property in Whitefield",
      "Property in Sarjapur Road",
      "Property in Electronic City",
      "Property in Yelahanka",
      "Property in HSR Layout",
      "Property in Koramangala",
      "Property in Marathahalli",
      "Property in Hebbal",
      "Property in JP Nagar",
      "Property in Bellandur",
    ],
    Plots: [
      "Plots in Whitefield",
      "Plots in Sarjapur Road",
      "Plots in Yelahanka",
      "Plots in Electronic City",
      "Plots in HSR Layout",
      "Plots in Kanakapura Road",
      "Plots in Marathahalli",
      "Plots in JP Nagar",
      "Plots in Sarjapur",
      "Plots in Bellandur",
    ],
  },
};

const PropertyOptions = () => {
  const [activeCity, setActiveCity] = useState("Bangalore");

  return (
    <Container className="property-container">
      <h4 className="property-title">
        Property Options in Top Cities for Buy <span className="dropdown-arrow">▼</span>
        <div className="underline"></div>
      </h4>

      <Nav variant="tabs" activeKey={activeCity} onSelect={(k) => setActiveCity(k)} className="city-tabs">
        {cities.map((city) => (
          <Nav.Item key={city}>
            <Nav.Link eventKey={city} className={activeCity === city ? "active-tab" : ""}>
              {city}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {properties[activeCity] && (
        <Row className="property-list">
          {Object.keys(properties[activeCity]).map((category, index) => (
            <Col md={3} key={index} className="property-category">
              <h6 className="category-title">{category} in {activeCity}</h6>
              {properties[activeCity][category].map((item, idx) => (
                <p key={idx} className="property-link">{item}</p>
              ))}
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PropertyOptions;
