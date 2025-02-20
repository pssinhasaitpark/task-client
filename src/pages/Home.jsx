import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topproject from "./Topproject";
import home1 from "../assets/img/home2.jpeg";
import home2 from "../assets/img/home3.jpeg";
import home3 from "../assets/img/home2.jpeg";


const propertyImages = [home1, home2, home3, home2];

const Home = () => {
  const [activeNav, setActiveNav] = useState("Buy");
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = "https://task-api-six-ebon.vercel.app/api";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/properties`);
        setProperties(response.data);
        setFilteredProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleSearch = () => {
    const filtered = properties.filter((property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <Container className="my-4">
        <Row className="align-items-center">
          <Col sm={9}>
            <h2 className="fw-normal">
              Find a home <span className="fst-italic">you'll love</span>
            </h2>
            <div className="bg-white border-bottom py-2">
              <div className="d-flex justify-content-center gap-4">
                {["Buy", "Rent", "New Projects", "PG", "Plot", "Commercial", "Post Free Property Ad"].map(
                  (item, index) => (
                    <Button
                      key={index}
                      variant={activeNav === item ? "danger" : "light"}
                      className={`fw-bold ${
                        activeNav === item ? "text-white" : "text-dark"
                      }`}
                      onClick={() => setActiveNav(item)}
                    >
                      {item}
                    </Button>
                  )
                )}
              </div>
            </div>

            {/* Search Bar */}
            <div className="my-3">
              <div className="bg-white p-3 rounded-pill shadow-sm d-flex align-items-center gap-2 border">
                <Form.Control
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 flex-grow-1"
                />
                <Button variant="danger" className="rounded-pill px-4" onClick={handleSearch}>
                  <FaSearch /> Search
                </Button>
              </div>
            </div>
          </Col>

          <Col sm={3}>
            <div className="slider-container position-relative">
              <Slider {...sliderSettings}>
                {propertyImages.map((image, index) => (
                  <div key={index} className="position-relative">
                    <img src={image} alt={`Slide ${index}`} className="img-fluid rounded" />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <h4 className="fw-normal mb-4">We've got properties in Indore for everyone</h4>
        <Row className="mt-3 g-4">
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <Col key={property.id} md={4} className="mb-4">
                <PropertyCard {...property} />
              </Col>
            ))
          ) : (
            <div className="text-center py-5">
              <h4>No properties found</h4>
              <p>Please check back later or try a different search.</p>
            </div>
          )}
        </Row>
      </Container>

      <Topproject />
    </>
  );
};

export default Home;
