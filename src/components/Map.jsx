"use client";

const Map = ({ onLocationSelect, currentLocation, onBack }) => {
  const handleLocationClick = (location) => {
    if (location === currentLocation) {
      alert("You are already here...");
      onBack(); 
    } else {
      const confirmTravel = window.confirm(
        `Would you like to travel to ${location}?`
      );
      if (confirmTravel) {
        onLocationSelect(location);
      }
    }
  };

  return (
    <div className="space-y-4 flex flex-col place-items-center">
      <button
        onClick={() => handleLocationClick("Watwon")}
        className="w-1/6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Watwon
      </button>
      <button
        onClick={() => handleLocationClick("Wishing Well")}
        className="w-1/6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
      >
        Wishing Well
      </button>
      <button
        onClick={() => handleLocationClick("Home")}
        className="w-1/6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
      >
        Home
      </button>
      <button
        onClick={onBack}
        className="w-1/6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
      >
        Back
      </button>
    </div>
  );
};

export default Map;