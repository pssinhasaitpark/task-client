import { useState } from "react";

// PostProperty Component with state management
export const PostProperty = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Property Posted: ${title}, ${location}, ${price}`);
    };
  
    return (
      <div className="container w-50 mt-5">
        <h2 className="text-center">Post Your Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Property Title</label>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Post Property</button>
        </form>
      </div>
    );
  };
  