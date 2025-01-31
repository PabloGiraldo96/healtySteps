"use client";

const Map = ({ onLocationSelect }) => {
  return (
    <div className="space-y-4 flex flex-col items-center w-full px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-4">
        Map
      </h2>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-3">
        <button
          onClick={() => onLocationSelect("Watwon")}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Watwon
        </button>
        <button
          onClick={() => onLocationSelect("Wishing Well")}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
        >
          Wishing Well
        </button>
        <button
          onClick={() => onLocationSelect("Home")}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Map;
