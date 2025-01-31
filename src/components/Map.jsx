"use client";

import { useState } from 'react';

const Map = ({ onLocationSelect }) => {
  const [currentLocation, setCurrentLocation] = useState("Home");

  const handleTravel = (location) => {
    const confirmTravel = window.confirm(`Do you want to travel to ${location}?`);
    if (confirmTravel) {
      setCurrentLocation(location);
      onLocationSelect(location); 
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Map</h2>
      <button
        onClick={() => handleTravel("Watwon")}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Watwon
      </button>
      <button
        onClick={() => handleTravel("Home")}
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Home
      </button>
      <button
        onClick={() => handleTravel("Wishing Well")}
        className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Wishing Well
      </button>
    </div>
  );
};

export default Map;