import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Import Toastify
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  console.log("AuthProvider initialized"); // Debug log for AuthProvider
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Ensure consistent token key
    if (token) {
      setIsAuthenticated(true);
      console.log("User authenticated, token found."); // Debug log for successful authentication
      // Optionally you could fetch user data based on the token here, if necessary
    }
    setLoading(false); // Set loading to false after checking the token
  }, []);

  const register = async (userData) => {
    let errorMessage = '';
    try {
      const response = await axios.post(
        'https://task-api-six-ebon.vercel.app/api/user/register',
        userData
      );
      localStorage.setItem('authToken', response.data.token); 
      setUser(response.data.user); // Set user state
      setIsAuthenticated(true); // Update authentication state
      return response.data; // Return the response data
    } catch (error) {
      errorMessage = error.response?.data?.message || 'Registration failed'; // Capture error message
      throw new Error(errorMessage); // Throw a new error with the message
    }
  };

  const login = async (credentials) => {
    console.log("Attempting to log in with credentials:", credentials); // Debug log for login attempt
    try {
      const response = await axios.post('https://task-api-six-ebon.vercel.app/api/user/login', credentials);
      console.log("Login successful, user data:", response.data.user); // Debug log for successful login
      setUser(response.data.user); // Set user state after successful login
      localStorage.setItem('authToken', response.data.token); // Store token in localStorage
      setIsAuthenticated(true);
      toast.success('Login successful!'); // Show success message
      return true; // Indicate success
    } catch (error) {
      console.error("Login failed:", error); // Debug log for login failure
      return false; // Indicate failure
      console.error("Login failed:", error); // Debug log for login failure
      return false; // Indicate failure
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    toast.success('Logged out successfully!'); // Show logout message
    // Additional logic can be added here if needed
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      loading, 
      user,
      register,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
