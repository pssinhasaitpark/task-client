import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  return (
    <div className="container mt-5">
      <h2>Search Results</h2>
      <p>Showing results for: {query}</p>
      {/* TODO: Add actual search results implementation */}
    </div>
  );
};

export default SearchResults;
