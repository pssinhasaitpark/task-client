import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topproject from "./Topproject";
import SearchBar from "../components/SearchBar";
import home1 from "../assets/img/home2.jpeg";
import home2 from "../assets/img/home3.jpeg";
import home3 from "../assets/img/home2.jpeg";
import FeaturedProjects from "./FeaturedProjects";
import PopularProperties from "./PopularProperties";
import PropertyServices from "./PropertyServices";
import NewProjectGallery from "./NewProjectGallery";
import OwnerProperties from "./OwnerProperties";
import AdviceTools from "./AdviceTools";
import PropertySnapshot from "./PropertySnapshot";
import PropertyOptions from "./PropertyOptions";

const propertyImages = [home1, home2, home3, home2];
const API_BASE_URL = "https://task-api-six-ebon.vercel.app/api";

const Home = () => {
  const [activeNav, setActiveNav] = useState("Buy");
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/properties`);
      setAllProperties(response.data);
      setFilteredProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setErrorMessage('Failed to fetch properties. Please try again later.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const filterProperties = (location, bhk, minPrice, maxPrice) => {
    let filtered = allProperties;
    
    if (location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (bhk) {
      filtered = filtered.filter(property => property.bhk >= bhk);
    }
    
    if (minPrice) {
      filtered = filtered.filter(property => property.price >= minPrice);
    }
    
    if (maxPrice) {
      filtered = filtered.filter(property => property.price <= maxPrice);
    }
    
    setFilteredProperties(filtered);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSearch = (searchParams) => {
    const params = new URLSearchParams(searchParams);
    const location = params.get('location');
    const bhk = Number(params.get('bhk'));
    const minPrice = Number(params.get('minPrice'));
    const maxPrice = Number(params.get('maxPrice'));
    
    filterProperties(location, bhk, minPrice, maxPrice);
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
    <Col xs={12} sm={9}>
      <h2 className="fw-normal">
        Find a home <span className="fst-italic">you'll love</span>
      </h2>
      <div className="bg-white border-bottom py-2">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {["Buy", "Rent", "New Projects", "PG", "Plot", "Commercial", "Post Free Property Ad"].map(
            (item, index) => (
              <Button
                key={index}
                variant={activeNav === item ? "danger" : "light"}
                className={`fw-bold ${activeNav === item ? "text-white" : "text-dark"}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Button>
            )
          )}
        </div>
      </div>
      {/* Integrated Search Bar */}
      <div className="my-3">
        <SearchBar onSearch={handleSearch} />
      </div>
    </Col>
    <Col xs={12} sm={3}>
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
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}
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
      <Container>
<FeaturedProjects/>
<PopularProperties/>
<PropertyServices/>
<Topproject />
<NewProjectGallery/>
<OwnerProperties/>
<AdviceTools/>
<PropertySnapshot/>
<PropertyOptions/>
</Container>

     
    </>
  );
};

export default Home;
