import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import DashboardService from '../../services/DashboardService';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({
    id: null,
    title: '',
    location: '',
    price: '',
    description: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [stats, setStats] = useState({});

  const fetchProperties = async () => {
    try {
      const response = await DashboardService.getProperties();
      setProperties(response.data);
    } catch (error) {
      setError('Failed to fetch properties');
    }
  };

  const fetchDashboardStats = async () => {
    try {
      const response = await DashboardService.getDashboardStats();
      setStats(response.data);
    } catch (error) {
      setError('Failed to fetch dashboard statistics');
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchDashboardStats();
  }, []);

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
      await DashboardService.deleteProperty(id);
      fetchProperties();
      setSuccess('Property deleted successfully');
    } catch (error) {
      setError('Failed to delete property');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentProperty.id) {
        await DashboardService.updateProperty(currentProperty.id, currentProperty);
      } else {
        await DashboardService.createProperty(currentProperty);
      }
      setShowModal(false);
      fetchProperties();
      setSuccess('Property saved successfully');
    } catch (error) {
      setError('Failed to save property');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await DashboardService.getUsers();
      setUsers(response.data);
    } catch (error) {
      setError('Failed to fetch users');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Admin Dashboard</h2>
      
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <div className="mb-4">
        <h4>Dashboard Statistics</h4>
        <div className="d-flex gap-3">
          <div className="card p-3">
            <h5>Total Properties</h5>
            <p className="display-6">{stats.totalProperties || 0}</p>
          </div>
          <div className="card p-3">
            <h5>Active Users</h5>
            <p className="display-6">{stats.activeUsers || 0}</p>
          </div>
          <div className="card p-3">
            <h5>Recent Activity</h5>
            <p className="display-6">{stats.recentActivity || 0}</p>
          </div>
        </div>
      </div>

      <h3>Property Management</h3>
      <Button variant="primary" onClick={handleAddProperty} className="mb-3">
        Add Property
      </Button>

      <Table striped bordered hover responsive className="mb-5">
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

      <h3>User Management</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              <Button variant="info" onClick={() => fetchUsers()}>
                Load Users
              </Button>
            </td>
          </tr>
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
