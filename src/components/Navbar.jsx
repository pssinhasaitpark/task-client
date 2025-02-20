import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavbarComponent = () => {
  return (
    <div>
      {/* Main Navbar */}
      <div style={{ width: "100%", backgroundColor: "#D8232A", position: "fixed", top: 0, left: 0, zIndex: 75 }}>
        <Container>
          <Navbar expand="lg" className="py-2" bg="transparent">
            <Container fluid className="px-4 d-flex justify-content-between align-items-center">
              
              {/* Left Side: Logo & Indore Dropdown */}
              <div className="d-flex align-items-center">
                <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-3">
                  MagicBricks
                </Navbar.Brand>

                <Dropdown className="ms-3">
                  <Dropdown.Toggle 
                    variant="light" 
                    className="fw-semibold border-0 text-white bg-transparent"
                    style={{ position: "relative" }} // Ensures no default arrow
                  >
                    Indore
                  </Dropdown.Toggle>
                </Dropdown>
              </div>

              {/* Right Side: MB Prime, Login & Post Property */}
              <div className="d-flex align-items-center">
                {/* MB Prime Dropdown */}
                <Dropdown className="me-3">
                  <Dropdown.Toggle 
                    variant="light" 
                    className="fw-semibold border-0 text-white bg-transparent"
                    style={{ position: "relative" }}
                  >
                    MB Prime
                  </Dropdown.Toggle>
                </Dropdown>

                {/* User Dropdown after login */}
                <Dropdown className="me-3">
                  <Dropdown.Toggle 
                    variant="outline-light" 
                    className="d-flex align-items-center text-white bg-transparent border-0"
                    style={{ position: "relative" }}
                  >
                    <FaUser className="me-2" /> User
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/dashboard">
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Post Property Button - Removed as it's now in dropdown */}
              </div>
            </Container>
          </Navbar>
        </Container>
      </div>

      {/* Spacing between main navbar and secondary navbar */}
      <div style={{ marginTop: "60px" }}></div>

      {/* Secondary Navbar */}
      <div style={{ width: "100%", backgroundColor: "#fff", padding: "10px 0" }}>
        <Container className="d-flex justify-content-between">
          {["Buy", "Rent", "Sell", "Home Loans", "Home Interiors", "MB Advice (New)", "Help"].map((item, index) => (
            <Dropdown key={index} className="mx-2">
              <Dropdown.Toggle 
                variant="light" 
                className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
                style={{ position: "relative", boxShadow: "none" }} // No default arrow
              >
                {item} <FaChevronDown className="ms-2 text-danger" />
              </Dropdown.Toggle>
            </Dropdown>
          ))}
        </Container>
      </div>

      <style>
        {`
          .dropdown-toggle::after {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default NavbarComponent;
