import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Spinner, Alert, Carousel } from 'react-bootstrap';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Property Data:", property);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) {
        setError('Invalid property ID');
        setLoading(false);
        return;
      }
  
      try {
        const apiUrl = `http://192.168.0.152:8000/api/properties/id?propertyId=${id}`;
      
        const response = await axios.get(apiUrl);
        
        if (!response.data) throw new Error('No property data found');
  
        setProperty(() => ({ ...response.data }));
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch property details');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProperty();
  }, [id]);

  return (
    <Container className="my-5">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <Alert variant="danger">
          <h5>Error Loading Property</h5>
          <p>{error}</p>
        </Alert>
      ) : property ? (
        <Row>
          <Col md={12} className="mb-4">
            {/* Image Carousel at the Top */}
            {property.images && property.images.length > 0 ? (
              <Carousel>
                {property.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={img}  // Ensure the API provides correct image URLs
                      alt={`Property Image ${index + 1}`}
                      style={{ height: '400px', objectFit: 'cover' }} 
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <Alert variant="warning">No images available for this property</Alert>
            )}
          </Col>

          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text className="text-muted">{property.location}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary">{property.propertyType}</span>
                  <span className="badge bg-success">{property.transactionType}</span>
                  <span className="badge bg-warning text-dark">{property.status}</span>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="mb-1"><strong>Price:</strong> ₹{property.price?.toLocaleString()}</p>
                    <p className="mb-1"><strong>Area:</strong> {property.area} sq.ft.</p>
                    <p className="mb-1"><strong>BHK:</strong> {property.bhk}</p>
                  </div>
                  <div className="col-6">
                    <p className="mb-1"><strong>Bed:</strong> {property.beds}</p>
                    <p className="mb-1"><strong>Bath:</strong> {property.baths}</p>
                    <p className="mb-1"><strong>Balcony:</strong> {property.balconies}</p>
                  </div>
                </div>
                <p><strong>Furnishing:</strong> {property.furnishingStatus}</p>
                <p><strong>Floor:</strong> {property.floor}/{property.totalFloors}</p>
                <p><strong>Facing:</strong> {property.facing}</p>
                <p className="mb-3">{property.description}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>{property.contactInfo || 'Contact details not available'}</Card.Text>
                <Button variant="primary">Contact Seller</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Alert variant="warning">Property details not found</Alert>
      )}
    </Container>
  );
};

export default ProductDetails;
