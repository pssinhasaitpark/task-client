import { useNavigate } from 'react-router-dom';

const PropertyCard = ({
  id,
  title,
  description,
  price,
  location,
  city,
  state,
  area,
  bhk,
  propertyType,
  beds,
  baths,
  balconies,
  furnishingStatus,
  carpetArea,
  pricePerSqft,
  floor,
  totalFloors,
  transactionType,
  status,
  facing,
  ownershipType,
  ageOfConstruction,
  address,
  offer,
  overlooking,
  images
}) => {
  const navigate = useNavigate();

  return (
    <div className="card m-2" style={{ width: "22rem" }}>
      <img src={images[0] || 'default-image.jpg'} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{location}, {city}, {state}</p>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-primary">{propertyType}</span>
          <span className="badge bg-success">{transactionType}</span>
          <span className="badge bg-warning text-dark">{status}</span>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <p className="mb-1"><strong>Price:</strong> ₹{price.toLocaleString()}</p>
            <p className="mb-1"><strong>Area:</strong> {area} sq.ft.</p>
            <p className="mb-1"><strong>BHK:</strong> {bhk}</p>
            <p className="mb-1"><strong>Carpet Area:</strong> {carpetArea} sq.ft.</p>
          </div>
          <div className="col-6">
            <p className="mb-1"><strong>Bed:</strong> {beds}</p>
            <p className="mb-1"><strong>Bath:</strong> {baths}</p>
            <p className="mb-1"><strong>Balcony:</strong> {balconies}</p>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-1"><strong>Furnishing:</strong> {furnishingStatus}</p>
          <p className="mb-1"><strong>Floor:</strong> {floor}/{totalFloors}</p>
          <p className="mb-1"><strong>Facing:</strong> {facing}</p>
          <p className="mb-1"><strong>Ownership:</strong> {ownershipType}</p>
          <p className="mb-1"><strong>Age of Construction:</strong> {ageOfConstruction} years</p>
          <p className="mb-1"><strong>Offer:</strong> {offer}</p>
          <p className="mb-1"><strong>Overlooking:</strong> {overlooking}</p>
        </div>
        <div className="d-grid">
          <button 
            className="btn btn-primary"
            onClick={() => navigate(`/product/${id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
