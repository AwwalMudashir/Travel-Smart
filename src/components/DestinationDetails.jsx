import React from 'react';
import { useParams } from 'react-router-dom';
import Destinations from './JSON/destinations';
import GoogleMap from './Trip Catalog/GoogleMap';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = Destinations.find((dest) => dest.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found!</div>;
  }

  return (
    <div className="destination-details-page bg-[#070031] text-white">

      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          className="w-full h-full object-cover opacity-80"
          src={destination.img}
          alt="Destination Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <h1 className="absolute bottom-10 left-5 text-4xl md:text-6xl font-bold z-10">
          Explore {destination.name}
        </h1>
      </div>

      {/* Activities Section */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-5">Activities</h2>
      <div className="flex flex-wrap justify-center gap-5 px-5">
        {destination.activities.map((activity, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-full h-64 object-cover"
              src={activity.image}
              alt={activity.name}
            />
            <h3 className="absolute bottom-4 left-4 text-2xl font-semibold">
              {activity.name}
            </h3>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="px-5 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About {destination.name}</h2>
        <p className="text-md md:text-lg leading-relaxed">{destination.long_desc}</p>
      </div>

      {/* Vacation Packages Section */}
      <div className="px-5 py-10">
        <h2 className="text-center text-4xl font-semibold mb-10">
          {destination.sname} Vacation Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Family Tour */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-full h-48 object-cover"
              src="https://img.freepik.com/free-photo/family-traveling-together-through-woods_23-2148943111.jpg"
              alt="Family Tour"
            />
            <div className="p-4 flex justify-between items-center">
              <div className="text-2xl font-semibold">Family Tour</div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          {/* Luxury Tour */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-full h-48 object-cover"
              src="https://img.freepik.com/free-photo/blue-deck-chairs-row-sunny-day_1203-1689.jpg"
              alt="Luxury Tour"
            />
            <div className="p-4 flex justify-between items-center">
              <div className="text-2xl font-semibold">Luxury Tour</div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          {/* Cultural Tour */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-full h-48 object-cover"
              src="https://img.freepik.com/free-photo/medium-shot-men-playing-music_23-2149029461.jpg"
              alt="Cultural Tour"
            />
            <div className="p-4 flex justify-between items-center">
              <div className="text-2xl font-semibold">Cultural Tour</div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          {/* Adventure Tour */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-full h-48 object-cover"
              src="https://img.freepik.com/free-photo/hiker-stretching-arms-field_23-2147683203.jpg"
              alt="Adventure Tour"
            />
            <div className="p-4 flex justify-between items-center">
              <div className="text-2xl font-semibold">Adventure Tour</div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Transportation Section */}
      <div className="px-5 py-10 bg-gray-900">
        <h2 className="text-4xl font-semibold mb-8">Navigating Through {destination.sname}</h2>

        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto rounded-lg object-cover"
              src="https://img.freepik.com/free-photo/crossroad-car-safari-scene_23-2151822307.jpg"
              alt="Transportation"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-4">Car Rental</h3>
            <p className="text-lg">{destination.carRental1}</p>
            <p className="text-lg mt-2">{destination.carRental2}</p>
            <p className="text-lg mt-2">{destination.carRental3}</p>
          </div>
        </div>

        {/* Walking Tour Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-4">Taking a Walk</h3>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>Intricate Doors: Famous for its elaborately carved wooden doors reflecting the island’s heritage.</li>
              <li>Vibrant Markets: Explore lively markets filled with textiles and spices.</li>
              <li>Historical Sites: Visit the Old Fort and House of Wonders, showcasing rich history and unique architecture.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto rounded-lg object-cover"
              src="https://img.freepik.com/free-photo/close-up-running-shoes-fitness-women-training-jogging_1150-4225.jpg"
              alt="Walking Tour"
            />
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="px-5 py-10">
        <GoogleMap locationQuery={destination.locationQuery} />
      </div>
    </div>
  );
};

export default DestinationDetails;
