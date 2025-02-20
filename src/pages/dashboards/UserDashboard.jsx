import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    city: '',
    state: '',
    area: '',
    bhk: '',
    propertyType: '',
    beds: '',
    baths: '',
    balconies: '',
    furnishingStatus: '',
    carpetArea: '',
    pricePerSqft: '',
    floor: '',
    totalFloors: '',
    transactionType: '',
    status: '',
    facing: '',
    ownershipType: '',
    ageOfConstruction: '',
    address: '',
    offer: '',
    overlooking: '',
    images: []
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const form = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'images') {
          formData.images.forEach((image, index) => {
            form.append(`images`, image);
          });
        } else {
          form.append(key, formData[key]);
        }
      });

      const response = await axios.post('http://192.168.0.152:8000/api/properties', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        setSuccess('Property added successfully!');
        setFormData({
          title: '',
          description: '',
          price: '',
          location: '',
          city: '',
          state: '',
          area: '',
          bhk: '',
          propertyType: '',
          beds: '',
          baths: '',
          balconies: '',
          furnishingStatus: '',
          carpetArea: '',
          pricePerSqft: '',
          floor: '',
          totalFloors: '',
          transactionType: '',
          status: '',
          facing: '',
          ownershipType: '',
          ageOfConstruction: '',
          address: '',
          offer: '',
          overlooking: '',
          images: []
        });
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add property');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add New Property</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area (sqft)</Form.Label>
          <Form.Control
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>BHK</Form.Label>
          <Form.Control
            type="number"
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Property Type</Form.Label>
          <Form.Control
            as="select"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Plot">Plot</option>
            <option value="Commercial">Commercial</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Beds</Form.Label>
          <Form.Control
            type="number"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Baths</Form.Label>
          <Form.Control
            type="number"
            name="baths"
            value={formData.baths}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Balconies</Form.Label>
          <Form.Control
            type="number"
            name="balconies"
            value={formData.balconies}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Furnishing Status</Form.Label>
          <Form.Control
            as="select"
            name="furnishingStatus"
            value={formData.furnishingStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Fully Furnished">Fully Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Carpet Area (sqft)</Form.Label>
          <Form.Control
            type="number"
            name="carpetArea"
            value={formData.carpetArea}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price per Sqft</Form.Label>
          <Form.Control
            type="number"
            name="pricePerSqft"
            value={formData.pricePerSqft}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Floor Number</Form.Label>
          <Form.Control
            type="number"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Total Floors</Form.Label>
          <Form.Control
            type="number"
            name="totalFloors"
            value={formData.totalFloors}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Transaction Type</Form.Label>
          <Form.Control
            as="select"
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="New">New</option>
            <option value="Resale">Resale</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Facing Direction</Form.Label>
          <Form.Control
            as="select"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ownership Type</Form.Label>
          <Form.Control
            as="select"
            name="ownershipType"
            value={formData.ownershipType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Freehold">Freehold</option>
            <option value="Leasehold">Leasehold</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age of Construction</Form.Label>
          <Form.Control
            type="text"
            name="ageOfConstruction"
            value={formData.ageOfConstruction}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Offer</Form.Label>
          <Form.Control
            type="text"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Overlooking</Form.Label>
          <Form.Control
            type="text"
            name="overlooking"
            value={formData.overlooking}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Property Images</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Property
        </Button>
      </Form>
    </Container>
  );
};

export default UserDashboard;
