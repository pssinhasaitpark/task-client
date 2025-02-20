import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.152:8000/api';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({
    id: null,
    title: '',
    location: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/properties`);
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleAddProperty = () => {
    setCurrentProperty({
      id: null,
      title: '',
      location: '',
      price: '',
      description: ''
    });
    setShowModal(true);
  };

  const handleEditProperty = (property) => {
    setCurrentProperty(property);
    setShowModal(true);
  };

  const handleDeleteProperty = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/properties/${id}`);
      fetchProperties();
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentProperty.id) {
        await axios.put(`${API_BASE_URL}/properties/${currentProperty.id}`, currentProperty);
      } else {
        await axios.post(`${API_BASE_URL}/properties`, currentProperty);
      }
      setShowModal(false);
      fetchProperties();
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Property Management</h2>
      <Button variant="primary" onClick={handleAddProperty} className="mb-3">
        Add Property
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.title}</td>
              <td>{property.location}</td>
              <td>${property.price}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEditProperty(property)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteProperty(property.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentProperty.id ? 'Edit Property' : 'Add Property'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={currentProperty.title}
                onChange={(e) => setCurrentProperty({...currentProperty, title: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={currentProperty.location}
                onChange={(e) => setCurrentProperty({...currentProperty, location: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={currentProperty.price}
                onChange={(e) => setCurrentProperty({...currentProperty, price: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentProperty.description}
                onChange={(e) => setCurrentProperty({...currentProperty, description: e.target.value})}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Property
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
