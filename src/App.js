import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-property" element={<PostProperty />} />
          <Route path="/post-property" element={<PostProperty />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/seller" element={<SellerDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
