import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const FeatureCard = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img 
          className="w-full h-64 object-cover" 
          src={props.img} 
          alt={props.name} 
        />
        {/* Feature Tag */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full">
          {props.feat}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Destination Name */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{props.name}</h2>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{props.description}</p>

        {/* See More Button */}
        <Link to={`/destination/${props.id}`}>
          <div className="w-full text-center">
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xl px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-500 transition-all duration-300 ease-in-out">
              See More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
