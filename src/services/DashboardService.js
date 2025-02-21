import axios from 'axios';

const API_BASE_URL = 'https://task-api-six-ebon.vercel.app/api';

const logResponse = (response) => {
  console.log('API Response:', {
    status: response.status,
    data: response.data,
    headers: response.headers,
    config: response.config
  });
  return response;
};

const logError = (error) => {
  console.error('API Error:', {
    message: error.message,
    response: error.response,
    config: error.config
  });
  return Promise.reject(error);
};

const DashboardService = {
  // Property related endpoints
  getProperties: async () => {
    return axios.get(`${API_BASE_URL}/properties`)
      .then(logResponse)
      .catch(logError);
  },

  getPropertyById: async (id) => {
    return axios.get(`${API_BASE_URL}/properties/${id}`)
      .then(logResponse)
      .catch(logError);
  },

  createProperty: async (propertyData) => {
    return axios.post(`${API_BASE_URL}/properties`, propertyData)
      .then(logResponse)
      .catch(logError);
  },

  updateProperty: async (id, propertyData) => {
    return axios.put(`${API_BASE_URL}/properties/${id}`, propertyData)
      .then(logResponse)
      .catch(logError);
  },

  deleteProperty: async (id) => {
    return axios.delete(`${API_BASE_URL}/properties/${id}`)
      .then(logResponse)
      .catch(logError);
  },

  // User related endpoints
  getUsers: async () => {
    return axios.get(`${API_BASE_URL}/users`)
      .then(logResponse)
      .catch(logError);
  },

  getUserById: async (id) => {
    return axios.get(`${API_BASE_URL}/users/${id}`)
      .then(logResponse)
      .catch(logError);
  },

  // Authentication related endpoints
  login: async (credentials) => {
    return axios.post(`${API_BASE_URL}/auth/login`, credentials)
      .then(logResponse)
      .catch(logError);
  },

  logout: async () => {
    return axios.post(`${API_BASE_URL}/auth/logout`)
      .then(logResponse)
      .catch(logError);
  },

  // Dashboard statistics
  getDashboardStats: async () => {
    return axios.get(`${API_BASE_URL}/dashboard/stats`)
      .then(logResponse)
      .catch(logError);
  }
};

export default DashboardService;
