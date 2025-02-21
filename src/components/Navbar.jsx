import React, { useContext, useState } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { FaUser, FaChevronDown, FaMapMarkerAlt, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavbarComponent = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [showBuyDropdown, setShowBuyDropdown] = useState(false);
  const [showRentDropdown, setShowRentDropdown] = useState(false);
  const [showSellDropdown, setShowSellDropdown] = useState(false);
  const [showHomeLoanDropdown, setShowHomeLoanDropdown] = useState(false);
  const [showHomeInteriorsDropdown, setShowHomeInteriorsDropdown] = useState(false);
  const [showMBAdviceDropdown, setShowMBAdviceDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);

  const cities = {
    "Nearby Cities": ["Ujjain", "Gwalior", "Bhopal", "Jabalpur"],
    "Popular Cities": [
      "Ahmedabad", "Bangalore", "Beyond Thane", "Chennai",
      "Gurgaon", "Hyderabad", "Indore", "Jaipur", "Kolkata",
      "Lucknow", "Mumbai", "Navi Mumbai", "New Delhi", "Noida",
      "Pune", "Thane"
    ],
    "Other Cities": [
      "Agra", "Ahmadnagar", "Allahabad", "Aluva", "Amritsar",
      "Aurangabad", "Badlapur", "Bareilly", "Belgaum", "Bhiwadi",
      "Bhilwandi", "Bhopal", "Bhubaneswar", "Bokaro Steel City",
      "Chandigarh", "Chengalpattu", "Coimbatore", "Dehradun", "Durgapur",
      "Ernakulam", "Erode", "Faridabad", "Ghaziabad", "Goa", "Gorakhpur",
      "Greater Noida", "Guntur", "Guwahati", "Hubli", "Jabalpur",
      "Jalandhar", "Jammu", "Jamshedpur", "Jodhpur", "Kalyan", "Kanpur",
      "Kannur", "Kochi", "Kolkata", "Kottayam", "Kozhikode", "Lonavala",
      "Ludhiana", "Madurai", "Mangalore", "Mohali", "Mysore", "Nagpur",
      "Nainital", "Nashik", "Navsari", "Nellore", "Newtown", "Ooty",
      "Palakkad", "Palghar", "Panchkula", "Patiala", "Patna", "Pondicherry",
      "Rajahmundry", "Raipur", "Ranchi", "Salem", "Satara", "Shimla",
      "Siliguri", "Solapur", "Sonipat", "Surat", "Thanjavur", "Thrissur",
      "Tirunelveli", "Tirupati", "Tirupur", "Trichy", "Trivandrum",
      "Tumkur", "Udaipur", "Udupi", "Vadodara", "Varanasi", "Vapi",
      "Vijayawada", "Visakhapatnam", "Vrindavan", "Zirakpur"
    ]
  };

  const rentOptions = {
    "Popular Choices": [
      "Owner Properties",
      "Verified Properties",
      "Furnished Homes",
      "Bachelor Friendly Homes",
      "Immediately Available"
    ],
    "Property Types": [
      "Flat for rent in Indore",
      "House for rent in Indore",
      "Villa for rent in Indore",
      "PG in Indore",
      "Office Space in Indore",
      "Commercial Space in Indore",
      "Coworking Space in Indore",
      "Coliving Space in Indore",
      "Student Hostels in Indore",
      "Luxury PG in Indore"
    ],
    "Budget": [
      "Under ₹ 10,000",
      "₹ 10,000 - ₹ 15,000",
      "₹ 15,000 - ₹ 25,000",
      "Above ₹ 25,000"
    ],
    "Explore": [
      "Localities",
      "Buy Vs Rent",
      "Find an Agent",
      "Share Requirement",
      "Property Services",
      "Rent Agreement"
    ]
  };

  const sellOptions = {
    "For Owner": [
      "Post PropertyFree",
      "My Dashboard",
      "Sell / Rent Ad Packages",
      "+91 9870 260 930 / Email Us"
    ],
    "For Agent & Builder": [
      "My Dashboard",
      "Ad Packages",
      "iAdvantage",
      "Developer Lounge",
      "Sales Enquiry"
    ],
    "Selling Tools": [
      "Property Valuation",
      "Find an Agent",
      "Rates & Trends",
      "PropWorth"
    ]
  };

  const homeLoanOptions = {
    "Apply Now": [
      "Home Loans",
      "Balance Transfer",
      "Loan Against Property"
    ],
    "Partners": [
      "SBI Home Loan",
      "HDFC Ltd Home Loan",
      "Axis Home Loan",
      "kotak Home Loan",
      "LIC HF Home Loan"
    ],
    "Explore": [
      "Home Loan EMI Calculator",
      "Home Loan Eligibility",
      "Get Home Loan Offers NEW",
      "Check Credit Score",
      "Home Loan Prepayment",
      "Home Loan Interest Rate",
      "Home Loan Balance Transfer",
      "Home Loan Documentation"
    ],
    "EMI Calculators": [
      "SBI Home Loan EMI Calculator",
      "HDFC Home Loan EMI Calculator",
      "Axis Bank Home Loan EMI Calculator",
      "Bajaj Home Loan EMI Calculator",
      "Kotak Home Loan EMI Calculator",
      "L&T Home Loan EMI Calculator"
    ],
    "Interest Rates": [
      "SBI Home Loan Interest Rate",
      "HDFC Home Loan Interest Rate",
      "Axis Bank Home Loan Interest Rate",
      "Bajaj Home Loan Interest Rate",
      "Kotak Bank Interest Rate",
      "L&T Home Loan Interest Rate"
    ],
   
  };

  const homeInteriorsOptions = {
    "Home Interior Design Ideas": [
      "Bathroom Design Ideas",
      "Bedroom Design Ideas",
      "Dining Design Ideas",
      "False Ceiling Design Ideas",
      "Kids Room Design Ideas",
      "Modular Kitchen Design Ideas",
      "Living Room Design Ideas",
      "TV Unit Design Ideas",
      "Wardrobe Design Ideas"
    ],
    "Full Home Interior Designs": [
      "1BHK Interior Design",
      "2BHK Interior Design",
      "3BHK Interior Design",
      "4BHK Interior Design"
    ],
    "Explore our services": [
      "Home Interior Design Services",
      "Design Consultation",
      "Full Home Interior Cost Calculator",
      "Kitchen/Wardrobe Calculator"
    ]
  };

  const mbAdviceOptions = {
    "MB Research": [
      "Insights",
      "Research",
      "Prop Index",
      "Find Pincode"
    ],
    "Services & Tools": [
      "Property ValuationNEW",
      "Rates & Trends",
      "Localities in Indore",
      "Locality Review Videos",
      "Compare Localities",
      "New Projects in Indore",
      "Project Review Videos",
      "MBTV Videos"
    ],
    "News & Blogs": [
      "Latest Blogs",
      "Lifestyle",
      "Policies",
      "Finance & Legal",
      "City Blogs",
      "Property News",
      "Trending Web Stories"
    ]
  };

  const helpOptions = {
    "Help": [
      "Help Center",
      "Sales Enquiry"
    ]
  };

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
                  RealEstate
                </Navbar.Brand>

                <Dropdown className="ms-3">
                  <Dropdown.Toggle 
                    variant="light" 
                    className="fw-semibold border-0 text-white bg-transparent"
                    style={{ position: "relative" }}
                  >
                    <FaMapMarkerAlt className="me-2" /> Indore <FaCaretDown className="ms-2 text-white" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="p-3" style={{ width: "600px" }}>
                    <h6>📍 INDIA</h6>
                    {Object.keys(cities).map((category, index) => (
                      <div key={index} className="mb-2">
                        <strong>{category}</strong>
                        <div className="d-flex flex-wrap">
                          {cities[category].map((city, idx) => (
                            <span key={idx} className="me-3 text-muted">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </Dropdown.Menu>
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
                {isAuthenticated ? (
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
                      <Dropdown.Item onClick={logout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link to="/login" className="btn btn-outline-light me-3">
                    Login
                  </Link>
                )}
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
          {/* Rent Dropdown with hover functionality */}
          <Dropdown
            className="mx-2"
            onMouseEnter={() => setShowRentDropdown(true)}
            onMouseLeave={() => setShowRentDropdown(false)}
            show={showRentDropdown}
          >
            <Dropdown.Toggle 
              variant="light" 
              className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
              style={{ position: "relative", boxShadow: "none" }}
            >
              Rent <FaChevronDown className="ms-2 text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu show={showRentDropdown}>
              {Object.keys(rentOptions).map((category, index) => (
                <div key={index} className="mb-2">
                  <strong>{category}</strong>
                  <Dropdown.Divider />
                  {rentOptions[category].map((option, idx) => (
                    <Dropdown.Item key={idx}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Other Navigation Items */}
          <Dropdown className="mx-2">
            <Dropdown.Toggle 
              variant="light" 
              className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
              style={{ position: "relative", boxShadow: "none" }}
            >
              Sell <FaChevronDown className="ms-2 text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(sellOptions).map((category, index) => (
                <div key={index} className="mb-2">
                  <strong>{category}</strong>
                  <Dropdown.Divider />
                  {sellOptions[category].map((option, idx) => (
                    <Dropdown.Item key={idx}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mx-2">
            <Dropdown.Toggle 
              variant="light" 
              className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
              style={{ position: "relative", boxShadow: "none" }}
            >
              Home Loans <FaChevronDown className="ms-2 text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(homeLoanOptions).map((category, index) => (
                <div key={index} className="mb-2">
                  <strong>{category}</strong>
                  <Dropdown.Divider />
                  {homeLoanOptions[category].map((option, idx) => (
                    <Dropdown.Item key={idx}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mx-2">
            <Dropdown.Toggle 
              variant="light" 
              className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
              style={{ position: "relative", boxShadow: "none" }}
            >
              Home Interiors <FaChevronDown className="ms-2 text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(homeInteriorsOptions).map((category, index) => (
                <div key={index} className="mb-2">
                  <strong>{category}</strong>
                  <Dropdown.Divider />
                  {homeInteriorsOptions[category].map((option, idx) => (
                    <Dropdown.Item key={idx}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mx-2">
            <Dropdown.Toggle 
              variant="light" 
              className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
              style={{ position: "relative", boxShadow: "none" }}
            >
              MB Advice <FaChevronDown className="ms-2 text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(mbAdviceOptions).map((category, index) => (
                <div key={index} className="mb-2">
                  <strong>{category}</strong>
                  <Dropdown.Divider />
                  {mbAdviceOptions[category].map((option, idx) => (
                    <Dropdown.Item key={idx}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mx-2">
            <Dropdown.Toggle 
              variant="light" 
              className="fw-semibold border-0 text-black bg-transparent d-flex align-items-center"
              style={{ position: "relative", boxShadow: "none" }}
            >
              Help <FaChevronDown className="ms-2 text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(helpOptions).map((category, index) => (
                <div key={index} className="mb-2">
                  <strong>{category}</strong>
                  <Dropdown.Divider />
                  {helpOptions[category].map((option, idx) => (
                    <Dropdown.Item key={idx}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>

      <style>
        {`
          .dropdown-toggle::after {
            display: none !important;
          }
          .dropdown-menu {
            display: flex !important;
            flex-wrap: wrap;
            gap: 10px;
          }
          .dropdown-menu > .dropdown-item:hover {
            background-color: #D8232A;
            color: #fff;
            transition: all 0.3s ease-in-out;
          }
          .dropdown-menu > .dropdown-item {
            padding: 10px 20px;
          }
        `}
      </style>
    </div>
  );
};

export default NavbarComponent;
