import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChartLine, FaCalculator, FaHandHoldingUsd, FaFileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AdviceTools = () => {
  const tools = [
    {
      icon: <FaChartLine size={40} className="text-danger" />, // Icon with color
      title: "Rates & Trends",
      description: "Know all about Property Rates & Trends in your city",
      link: "#",
    },
    {
      icon: <FaCalculator size={40} className="text-danger" />,
      title: "EMI Calculator",
      description: "Know how much you'll have to pay every month on your loan",
      link: "#",
    },
    {
      icon: <FaHandHoldingUsd size={40} className="text-danger" />,
      title: "Investment Hotspot",
      description: "Discover the top localities in your city for investment",
      link: "#",
    },
    {
      icon: <FaFileAlt size={40} className="text-danger" />,
      title: "Research Insights",
      description: "Get expert insights and research reports on real estate",
      link: "#",
    },
  ];

  return (
    <Container className="mt-5">
      <h4 className="mb-3">Advice & Tools</h4>
      <hr className="border-danger w-25 mb-4" />
      <Row>
        {tools.map((tool, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card className="p-3 shadow-sm border-0">
              <div className="mb-2">{tool.icon}</div>
              <Card.Title>{tool.title}</Card.Title>
              <Card.Text className="text-muted">{tool.description}</Card.Text>
              <a href={tool.link} className="text-danger fw-bold">
                View now →
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdviceTools;
