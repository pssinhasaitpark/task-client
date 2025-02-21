import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import "./OwnerProperties.css"; // Importing the CSS file

// Import property images (Replace with actual paths)
import img1 from "../assets/img/property1.jpg";
import img2 from "../assets/img/property2.jpg";
import img3 from "../assets/img/property3.jpg";
import img4 from "../assets/img/property4.jpg";

const properties = [
  {
    id: 1,
    bhk: "2 BHK Flat",
    price: "₹ 58 Lac",
    location: "Manu Shree Nagar, Indore",
    status: "Ready to Move",
    image: img1,
    imageCount: 6,
  },
  {
    id: 2,
    bhk: "1 BHK Flat",
    price: "₹ 15 Lac",
    location: "AB Road, Indore",
    status: "Ready to Move",
    image: img2,
    imageCount: 14,
  },
  {
    id: 3,
    bhk: "2 BHK Flat",
    price: "₹ 26.5 Lac",
    location: "Rau Pithampur Road, Indore",
    status: "Ready to Move",
    image: img3,
    imageCount: 4,
  },
  {
    id: 4,
    bhk: "3 BHK Flat",
    price: "₹ 98 Lac",
    location: "Indore",
    status: "Ready to Move",
    image: img4,
    imageCount: 9,
  },
];

const OwnerProperties = () => {
  return (
    <Container className="owner-properties-container">
      {/* Title Section */}
      <div className="title-section">
        <h4>Exclusive Owner Properties in Indore</h4>
        <a href="#" className="see-all-link">
          See all Properties →
        </a>
      </div>

      {/* Property Cards */}
      <div className="property-cards-wrapper">
        {properties.map((property) => (
          <Card key={property.id} className="property-card">
            <div className="image-wrapper">
              <Card.Img variant="top" src={property.image} className="property-image" />
              <div className="image-count">
                <FaCamera /> {property.imageCount}
              </div>
            </div>
            <Card.Body>
              <Card.Title className="property-title">{property.bhk}</Card.Title>
              <Card.Text className="property-price">{property.price}</Card.Text>
              <Card.Text className="property-location">{property.location}</Card.Text>
              <Card.Text className="property-status">{property.status}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        {/* Right Arrow Button */}
        <Button className="arrow-button">
          <BsArrowRight size={24} />
        </Button>
      </div>
    </Container>
  );
};

export default OwnerProperties;
