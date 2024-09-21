import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const SearchResults = ({ results, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleResultClick = (destination) => {
    navigate(`/destination/${destination.id}`);
    setSearchQuery(''); 
  };

  return (
    <div className="search-results-dropdown absolute top-full left-0 mt-1 w-[240px] bg-white shadow-lg border border-gray-300 rounded-lg z-10">
      {results.map((result, index) => (
        <div 
          key={index} 
          className="search-result-item p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleResultClick(result)}
        >
          <div className="font-bold text-sm">{result.name}</div>
          <div className="text-xs text-gray-500">
            {result.activities.map(activity => activity.name).join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
