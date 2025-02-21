import React, { useState } from "react";
import { Form, Button, Dropdown, InputGroup } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [bhk, setBhk] = useState(1);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    if (!location) {
      alert("Please select a location");
      return;
    }
    
    onSearch(`?location=${location}&bhk=${bhk}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark p-3 rounded">
      {/* Location */}
      <InputGroup className="me-2">
        <InputGroup.Text>📍</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </InputGroup>

      {/* BHK Dropdown */}
      <Dropdown className="me-2">
        <Dropdown.Toggle variant="dark">
          🏠 Flat +{bhk}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {[1, 2, 3, 4, 5].map((num) => (
            <Dropdown.Item key={num} onClick={() => setBhk(num)}>
              {num} BHK
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Budget Inputs */}
      <InputGroup className="me-2">
        <InputGroup.Text>💰</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </InputGroup>

      {/* Search Button */}
      <Button variant="danger" onClick={handleSearch}>
        🔍 Search
      </Button>
    </div>
  );
};

export default SearchBar;
