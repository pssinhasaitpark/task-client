import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft, FaCamera } from "react-icons/fa";
import property1 from "../assets/img/property1.jpg";
import property2 from "../assets/img/property2.jpg";
import property3 from "../assets/img/property3.jpg";
import property4 from "../assets/img/property4.jpg";

const properties = [
  {
    id: 1,
    bhk: "2 BHK Flat",
    price: "₹ 58 Lac",
    area: "1190 sqft",
    location: "Manu Shree Nagar, Indore",
    status: "Ready to Move",
    image: property1,
    imageCount: 6,
  },
  {
    id: 2,
    bhk: "1 BHK Flat",
    price: "₹ 15 Lac",
    area: "585 sqft",
    location: "AB Road, Indore",
    status: "Ready to Move",
    image: property2,
    imageCount: 14,
  },
  {
    id: 3,
    bhk: "2 BHK Flat",
    price: "₹ 26.5 Lac",
    area: "905 sqft",
    location: "Rau Pithampur Road, Indore",
    status: "Ready to Move",
    image: property3,
    imageCount: 4,
  },
  {
    id: 4,
    bhk: "3 BHK Flat",
    price: "₹ 98 Lac",
    area: "1535 sqft",
    location: "",
    status: "Ready to Move",
    image: property4,
    imageCount: 9,
  },
];

const PopularProperties = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">
          Popular Owner Properties
          <span className="border-bottom border-warning ms-2"></span>
        </h4>
        <a href="#" className="text-danger fw-semibold">
          See all Properties <FaArrowRight />
        </a>
      </div>

      <div className="d-flex overflow-auto" style={{ gap: "15px", scrollbarWidth: "none" }}>
        {properties.map((property) => (
          <Card key={property.id} className="border-0 shadow-sm" style={{ minWidth: "280px" }}>
            <div className="position-relative">
              <Card.Img
                variant="top"
                src={property.image}
                className="rounded-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Badge
                bg="dark"
                className="position-absolute top-0 start-0 m-2 d-flex align-items-center px-2"
              >
                <FaCamera className="me-1" /> {property.imageCount}
              </Badge>
            </div>
            <Card.Body>
              <Card.Text className="fw-bold">{property.bhk}</Card.Text>
              <Card.Text>
                <span className="fw-bold">{property.price}</span> | <span>{property.area}</span>
              </Card.Text>
              <Card.Text className="text-muted small">{property.location}</Card.Text>
              <Card.Text className="text-success small">{property.status}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Right Navigation Arrow Button */}
      <Button
        variant="light"
        className="position-absolute end-0 me-3 mt-3 border rounded-circle shadow-sm"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <FaArrowRight />
      </Button>
    </Container>
  );
};

export default PopularProperties;
