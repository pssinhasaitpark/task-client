import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import googleplay from "../assets/img/googleplay.png";
import appleplay from "../assets/img/appleplay.png";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 border-top">
      <Container>
        <Row>
          {/* Left Section */}
          <Col md={6}>
            <h6 className="fw-bold">About Magicbricks</h6>
            <p className="text-muted small">
              As the largest platform connecting property buyers and sellers, ...{" "}
              <a href="#" className="text-dark fw-bold">Read more</a>
            </p>
            <h6 className="fw-bold mt-3">More from our Network</h6>
            <p className="text-muted small">Times Now | ET Now</p>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <img src={googleplay} alt="Download on Google Play" width="120" height="40" />
              <img src={appleplay} alt="Download on App Store" width="120" height="40" />
              <div className="d-flex gap-3">
                <a href="https://facebook.com" className="text-dark fs-5" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com" className="text-dark fs-5" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://linkedin.com" className="text-dark fs-5" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://youtube.com" className="text-dark fs-5" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://instagram.com" className="text-dark fs-5" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </Col>

          {/* Right Section */}
          <Col md={6}>
            <h6 className="fw-bold">Properties in India</h6>
            <p className="text-muted small">
              Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune |
              Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad
            </p>
            <h6 className="fw-bold mt-3">New Projects in India</h6>
            <p className="text-muted small">
              New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai |
              New Projects in Pune | New Projects in Noida | New Projects in Gurgaon |
              New Projects in Bangalore | New Projects in Ahmedabad
            </p>
          </Col>
        </Row>
        
        {/* Links Row */}
        <Row className="mt-4">
          <Col>
            <div className="d-flex flex-wrap justify-content-center gap-3 small mb-4">
              <a href="/sitemap" className="text-dark">Sitemap</a>
              <a href="/terms" className="text-dark">Terms & Conditions</a>
              <a href="/privacy" className="text-dark">Privacy Policy</a>
              <a href="/whistleblower" className="text-dark">Whistle Blower Policy</a>
              <a href="/blog" className="text-dark">Blog</a>
              <a href="/careers" className="text-dark">Careers</a>
              <a href="/testimonials" className="text-dark">Testimonials</a>
              <a href="/unsubscribe" className="text-dark">Unsubscribe</a>
              <a href="/help" className="text-dark">Help Center</a>
              <a href="/sales" className="text-dark">Sales Enquiry</a>
              <a href="/services" className="text-dark fw-bold">Buy Our Services</a>
            </div>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="mt-4 mb-3">
          <Col>
            <p className="text-muted small text-center">
              Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform
              to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not
              and cannot be a party to or privy to or control in any manner any transactions between the Seller
              and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by{" "}
              <a href="/about" className="text-dark fw-bold">Read more</a>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Copyright Full-Width Background */}
      <div className="bg-dark text-white py-3 mt-3">
        <Container>
          <p className="text-center small mb-0">
            All trademarks, logos and names are properties of their respective owners. All Rights Reserved.
            &copy; Copyright 2025 Magicbricks Realty Services Limited.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
