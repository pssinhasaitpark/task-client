import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topproject from "./Topproject";
import home1 from "../assets/img/home1.jpeg";
import home2 from "../assets/img/home2.jpeg";
import home3 from "../assets/img/home3.jpeg";
import home4 from "../assets/img/home4.jpg";

const propertyImages = [home1, home2, home3, home4];

const Home = () => {
  const [activeNav, setActiveNav] = useState("Buy");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: "ease-in-out"
  };

  return (
    <>
   
      <Container className="my-4">
        <Row className="align-items-center">
          {/* Left Side: Title, Navigation, and Search Bar */}
          <Col md={6}>
            <h2 className="fw-normal">
              Find a home <span className="fst-italic">you'll love</span>
            </h2>
            <div className="bg-white border-bottom py-2">
              <Container className="d-flex justify-content-center gap-4">
                {["Buy", "Rent", "New Projects", "PG", "Plot", "Commercial", "Post Free Property Ad"].map(
                  (item, index) => (
                    <Button
                      key={index}
                      variant={activeNav === item ? "danger" : "link"}
                      className={`fw-bold text-decoration-none ${
                        activeNav === item ? "text-white" : "text-dark"
                      }`}
                      onClick={() => setActiveNav(item)}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Container>
            </div>
            <Row className="justify-content-center my-3">
              <Col md={8} className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2 border">
                <Form.Control 
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 flex-grow-1"
                />
                <Button variant="danger" onClick={handleSearch}>
                  <FaSearch /> Search
                </Button>
              </Col>
            </Row>
          </Col>

          {/* Right Side: Slider */}
          <Col md={6}>
            <div className="slider-container">
              <Slider {...sliderSettings}>
                {propertyImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Property Listings */}
      <Container className="mb-5">
        <h4 className="fw-normal mb-4">We've got properties in Indore for everyone</h4>
        <Row className="mt-3 g-4">
          {[
            { type: "Owner Properties", count: 1234 },
            { type: "Projects", count: 567 },
            { type: "Ready to move-in", count: 891 },
            { type: "Budget Homes", count: 2345 }
          ].map((item, index) => (
            <Col key={`property-${index}`} md={3} className="text-center">
              <div className="border rounded p-3 shadow-sm h-100 d-flex flex-column">
                <img
                  src={propertyImages[index]}
                  alt={item.type}
                  className="img-fluid rounded mb-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5 className="fw-bold mt-2">{item.count}</h5>
                <p className="text-muted mb-3">{item.type}</p>
                <Button variant="danger" className="mt-auto">
                  Explore &#8594;
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

    
      <Topproject />
    </>
  );
};

export default Home;
