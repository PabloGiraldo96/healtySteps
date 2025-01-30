"use client";

const Map = ({ onLocationSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Map</h2>
      <button
        onClick={() => onLocationSelect("Watwon")}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Watwon
      </button>
      <button
        onClick={() => onLocationSelect("Home")}
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Home
      </button>
    </div>
  );
};

export default Map;