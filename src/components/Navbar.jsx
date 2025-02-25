import React, { useContext, useState, useEffect, useRef } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import {
  FaUser ,
  FaChevronDown,
  FaMapMarkerAlt,
  FaCaretDown,
} from "react-icons/fa";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavbarComponent = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  // Clear any existing timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Use a small delay before closing the dropdown to make interaction smoother
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const cities = {
    "Nearby Cities": ["Ujjain", "Gwalior", "Bhopal", "Jabalpur"],
    "Popular Cities": [
      "Ahmedabad",
      "Bangalore",
      "Beyond Thane",
      "Chennai",
      "Gurgaon",
      "Hyderabad",
      "Indore",
      "Jaipur",
      "Kolkata",
      "Lucknow",
      "Mumbai",
      "Navi Mumbai",
      "New Delhi",
      "Noida",
      "Pune",
      "Thane",
    ],
    "Other Cities": [
      "Agra",
      "Ahmadnagar",
      "Allahabad",
      "Aluva",
      "Amritsar",
      "Aurangabad",
      "Badlapur",
      "Bareilly",
      "Belgaum",
      "Bhiwadi",
      "Bhilwandi",
      "Bhopal",
      "Bhubaneswar",
      "Bokaro Steel City",
      "Chandigarh",
      "Chengalpattu",
      "Coimbatore",
      "Dehradun",
      "Durgapur",
      "Ernakulam",
      "Erode",
      "Faridabad",
      "Ghaziabad",
      "Goa",
      "Gorakhpur",
      "Greater Noida",
      "Guntur",
      "Guwahati",
      "Hubli",
      "Jabalpur",
      "Jalandhar",
      "Jammu",
      "Jamshedpur",
      "Jodhpur",
      "Kalyan",
      "Kanpur",
      "Kannur",
      "Kochi",
      "Kolkata",
      "Kottayam",
      "Kozhikode",
      "Lonavala",
      "Ludhiana",
      "Madurai",
      "Mangalore",
      "Mohali",
      "Mysore",
      "Nagpur",
      "Nainital",
      "Nashik",
      "Navsari",
      "Nellore",
      "Newtown",
      "Ooty",
      "Palakkad",
      "Palghar",
      "Panchkula",
      "Patiala",
      "Patna",
      "Pondicherry",
      "Rajahmundry",
      "Raipur",
      "Ranchi",
      "Salem",
      "Satara",
      "Shimla",
      "Siliguri",
      "Solapur",
      "Sonipat",
      "Surat",
      "Thanjavur",
      "Thrissur",
      "Tirunelveli",
      "Tirupati",
      "Tirupur",
      "Trichy",
      "Trivandrum",
      "Tumkur",
      "Udaipur",
      "Udupi",
      "Vadodara",
      "Varanasi",
      "Vapi",
      "Vijayawada",
      "Visakhapatnam",
      "Vrindavan",
      "Zirakpur",
    ],
  };

  const rentOptions = {
    "Popular Choices": [
      "Owner Properties",
      "Verified Properties",
      "Furnished Homes",
      "Bachelor Friendly Homes",
      "Immediately Available",
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
      "Luxury PG in Indore",
    ],
    Budget: [
      "Under ₹ 10,000",
      "₹ 10,000 - ₹ 15,000",
      "₹ 15,000 - ₹ 25,000",
      "Above ₹ 25,000",
    ],
    Explore: [
      "Localities",
      "Buy Vs Rent",
      "Find an Agent",
      "Share Requirement",
      "Property Services",
      "Rent Agreement",
    ],
  };

  const sellOptions = {
    "For Owner": [
      "Post Property Free",
      "My Dashboard",
      "Sell / Rent Ad Packages",
      "+91 9870 260 930 / Email Us",
    ],
    "For Agent & Builder": [
      "My Dashboard",
      "Ad Packages",
      "iAdvantage",
      "Developer Lounge",
      "Sales Enquiry",
    ],
    "Selling Tools": [
      "Property Valuation",
      "Find an Agent",
      "Rates & Trends",
      "PropWorth",
    ],
  };

  const homeLoanOptions = {
    "Apply Now": ["Home Loans", "Balance Transfer", "Loan Against Property"],
    Partners: [
      "SBI Home Loan",
      "HDFC Ltd Home Loan",
      "Axis Home Loan",
      "Kotak Home Loan",
      "LIC HF Home Loan",
    ],
    Explore: [
      "Home Loan EMI Calculator",
      "Home Loan Eligibility",
      "Get Home Loan Offers NEW",
      "Check Credit Score",
      "Home Loan Prepayment",
      "Home Loan Interest Rate",
      "Home Loan Balance Transfer",
      "Home Loan Documentation",
    ],
    "EMI Calculators": [
      "SBI Home Loan EMI Calculator",
      "HDFC Home Loan EMI Calculator",
      "Axis Bank Home Loan EMI Calculator",
      "Bajaj Home Loan EMI Calculator",
      "Kotak Home Loan EMI Calculator",
      "L&T Home Loan EMI Calculator",
    ],
    "Interest Rates": [
      "SBI Home Loan Interest Rate",
      "HDFC Home Loan Interest Rate",
      "Axis Bank Home Loan Interest Rate",
      "Bajaj Home Loan Interest Rate",
      "Kotak Bank Interest Rate",
      "L&T Home Loan Interest Rate",
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
      "Wardrobe Design Ideas",
    ],
    "Full Home Interior Designs": [
      "1BHK Interior Design",
      "2BHK Interior Design",
      "3BHK Interior Design",
      "4BHK Interior Design",
    ],
    "Explore our services": [
      "Home Interior Design Services",
      "Design Consultation",
      "Full Home Interior Cost Calculator",
      "Kitchen/Wardrobe Calculator",
    ],
  };

  const mbAdviceOptions = {
    "MB Research": ["Insights", "Research", "Prop Index", "Find Pincode"],
    "Services & Tools": [
      "Property Valuation NEW",
      "Rates & Trends",
      "Localities in Indore",
      "Locality Review Videos",
      "Compare Localities",
      "New Projects in Indore",
      "Project Review Videos",
      "MBTV Videos",
    ],
    "News & Blogs": [
      "Latest Blogs",
      "Lifestyle",
      "Policies",
      "Finance & Legal",
      "City Blogs",
      "Property News",
      "Trending Web Stories",
    ],
  };

  const helpOptions = {
    Help: ["Help Center", "Sales Enquiry"],
  };

  const mbPrimeOptions = {
    "MB Prime": ["Benefits", "Subscribe Now", "My Subscriptions"]
  };

  const loginOptions = {
    "Account": [
      <Link to="/login" className="dropdown-item">User  Login</Link>,
      <Link to="/register" className="dropdown-item">Create Account</Link>,
      <Link to="/profile" className="dropdown-item">My Profile</Link>
    ]
  };

  // Custom dropdown component to handle hover events properly
  const HoverDropdown = ({ menuName, options, activeKey, icon, textColor = "text-black", bgColor = "bg-transparent", additionalClasses = "" }) => {
    const isActive = activeDropdown === activeKey;
    
    return (
      <Dropdown
        className={`mx-2 ${additionalClasses}`}
        onMouseEnter={() => handleMouseEnter(activeKey)}
        onMouseLeave={handleMouseLeave}
        show={isActive}
      >
        <Dropdown.Toggle
          variant="light"
          className={`fw-semibold border-0 ${textColor} ${bgColor} d-flex align-items-center`}
          style={{
            position: "relative",
            boxShadow: "none",
            borderBottom: isActive ? "2px solid #D8232A" : "none",
            transition: "border-bottom 0.2s ease",
          }}
        >
          {icon && icon} {menuName} {activeKey !== "cities" && <FaChevronDown className="ms-2 text-danger" />}
          {activeKey === "cities" && <FaCaretDown className="ms-2 text-white" />}
        </Dropdown.Toggle>
        <Dropdown.Menu
          show={isActive}
          style={{
            display: "flex",
            flexDirection: activeKey === "login" || activeKey === "user" ? "column" : "row",
            width: activeKey === "cities" ? "600px" : activeKey === "login" || activeKey === "user" ? "200px" : "800px",
            overflowX: "auto",
            pointerEvents: "auto",
            padding: activeKey === "cities" ? "16px" : "",
          }}
          onMouseEnter={() => handleMouseEnter(activeKey)}
          onMouseLeave={handleMouseLeave}
          className={activeKey === "cities" ? "p-3" : ""}
        >
          {activeKey === "cities" && <h6>📍 INDIA</h6>}
          
          {Object.keys(options).map((category, index) => (
            <div key={index} className={`mb-2 ${activeKey !== "login" && activeKey !== "user" ? "px-3" : ""}`}>
              <strong>{category}</strong>
              <Dropdown.Divider />
              {Array.isArray(options[category]) ? (
                activeKey === "cities" ? (
                  <div className="d-flex flex-wrap">
                    {options[category].map((item, idx) => (
                      <span key={idx} className="me-3 text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  options[category].map((item, idx) => (
                    <Dropdown.Item key={idx}>
                      {item}
                    </Dropdown.Item>
                  ))
                )
              ) : null}
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <div>
      {/* Main Navbar */}
      <div className="navbar-container">
        <Container>
          <Navbar expand="lg" className="py-2" bg="transparent">
            <Container fluid className="navbar-inner">
              {/* Left Side: Logo & Indore Dropdown */}
              <div className="d-flex align-items-center">
                <Navbar.Brand
                  as={Link}
                  to="/"
                  className="fw-bold text-white fs-3"
                >
                  RealEstate
                </Navbar.Brand>

                {/* Updated Indore dropdown using HoverDropdown component */}
                <HoverDropdown 
                  menuName="Indore" 
                  options={cities} 
                  activeKey="cities" 
                  icon={<FaMapMarkerAlt className="me-2" />}
                  textColor="text-white" 
                  additionalClasses="ms-3"
                />
              </div>

              {/* Right Side: MB Prime, Login & Post Property */}
              <div className="d-flex align-items-center">
                {/* MB Prime Dropdown using HoverDropdown component */}
                <HoverDropdown 
                  menuName="MB Prime" 
                  options={mbPrimeOptions} 
                  activeKey="mbPrime" 
                  textColor="text-white"
                  additionalClasses="me-3" 
                />

                {/* User Dropdown after login with HoverDropdown component */}
                {isAuthenticated ? (
                  <HoverDropdown 
                    menuName="User " 
                    options={{
                      "Account": [
                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>,
                        <Link to="/my-properties" className="dropdown-item">My Properties</Link>,
                        <Link to="/favorites" className="dropdown-item">Favorites</Link>,
                        <Link to="/login" className="dropdown-item" onClick={logout}>Logout</Link>
                      ]
                    }} 
                    activeKey="user" 
                    icon={<FaUser  className="me-2" />}
                    textColor="text-white"
                    additionalClasses="me-3" 
                  />
                ) : (
                  <HoverDropdown 
                    menuName="Login" 
                    options={loginOptions} 
                    activeKey="login" 
                    textColor="text-white"
                    additionalClasses="me-3" 
                  />
                )}
              </div>
            </Container>
          </Navbar>
        </Container>
      </div>

      {/* Secondary Navbar */}
      <div className="secondary-navbar">
        <Container className="nav-container">
          {/* Use the custom HoverDropdown component for each dropdown */}
          <HoverDropdown menuName="Rent" options={rentOptions} activeKey="rent" />
          <HoverDropdown menuName="Sell" options={sellOptions} activeKey="sell" />
          <HoverDropdown menuName="Home Loans" options={homeLoanOptions} activeKey="homeLoan" />
          <HoverDropdown menuName="Home Interiors" options={homeInteriorsOptions} activeKey="homeInteriors" />
          <HoverDropdown menuName="MB Advice" options={mbAdviceOptions} activeKey="mbAdvice" />
          <HoverDropdown menuName="Help" options={helpOptions} activeKey="help" />
        </Container>
      </div>
    </div>
  );
};

export default NavbarComponent;