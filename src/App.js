import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboards/UserDashboard";
import PostProperty from "./pages/PostProperty";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

// Components
const NotFound = () => (
  <div className="container mt-5 text-center">
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

// Dashboards
const UserDashboard = () => <div className="container mt-5"><h2>User Dashboard</h2></div>;
const SellerDashboard = () => <div className="container mt-5"><h2>Seller Dashboard</h2></div>;

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = React.useContext(AuthContext);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Layout Wrapper
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/login"; 

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <div className="mt-4">{children}</div>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/add-property" element={<PostProperty />} />
            <Route path="/post-property" element={<PostProperty />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
            <Route 
              path="/dashboard/user" 
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/seller" 
              element={
                <ProtectedRoute>
                  <SellerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
