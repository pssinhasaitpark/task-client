// PropertyCard Component
const PropertyCard = ({ title, location, price }) => (
  <div className="card m-2" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Location: {location}</p>
      <p className="card-text">Price: ${price}</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
);
export default PropertyCard
