import React, { useState } from 'react';
import './Trip.css';
import Destinations from '../JSON/destinations';
import Destination from './Destination';

const TripRest = () => {
  const [selectedContinent, setSelectedContinent] = useState('');

  // Filter the destinations based on the selected continent
  const filteredDestinations = selectedContinent
    ? Destinations.filter((dest) => dest.continent === selectedContinent)
    : Destinations;

  const Dests = filteredDestinations.map((dest) => {
    return (
      <div key={dest.id} className="w-full md:w-[50%] p-4">
        <Destination {...dest} />
      </div>
    );
  });
  return (
    <div className='bg-white pl-[2%] pb-[30px] pr-[2%]'>
<h1 className='text-4xl pt-[40px] text-center pb-[40px]'>Our <span className='text-[#68C6C8]'>Destinations</span></h1>
<div className='flex cont gap-4'>
  {/* Filter Section */}
  <div className='left w-full md:w-[30%] p-6 bg-white shadow-lg rounded-xl'>
          <h1 className='text-2xl font-semibold text-gray-900 flex items-center mb-6'>
            <i className="fa-solid fa-filter fa-sm mr-2 text-gray-500"></i> Filter
          </h1>
          <hr className='border-gray-300 mb-4' />

          <form>
            {[
              "Africa",
              "Asia",
              "Europe",
              "North America",
              "South America",
              "Antarctica",
              "Australia",
            ].map((continent) => (
              <div key={continent} className='flex items-center mb-4'>
                <input
                  type="radio"
                  id={continent}
                  name="continent"
                  value={continent}
                  onChange={(e) => setSelectedContinent(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={continent}
                  className='ml-3 text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer'
                >
                  {continent}
                </label>
              </div>
            ))}
          </form>
        </div>

  <div className='right grid '>
  {Dests}
  </div>
  </div>
</div>
  )
}

export default TripRest

