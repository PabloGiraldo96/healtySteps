"use client";

const Map = ({ onLocationSelect }) => {
  return (
    <div className="space-y-4 flex flex-col place-items-center">
        <button
          onClick={() => onLocationSelect("Watwon")}
          className="w-1/6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Watwon
        </button>
        <button
          onClick={() => onLocationSelect("Wishing Well")}
          className="w-1/6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
        >
          Wishing Well
        </button>
        <button
          onClick={() => onLocationSelect("Home")}
          className="w-1/6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          Home
        </button>
      </div>
  );
};

export default Map;
