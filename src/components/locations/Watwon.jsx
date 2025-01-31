const Watwon = ({ onBack }) => {
    return (
      <div className="space-y-4 flex flex-col place-items-center">
        <button
          onClick={() => alert("Store clicked!")}
          className="w-1/6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Store
        </button>
        <button
          onClick={() => alert("Bar clicked!")}
          className="w-1/6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Bar
        </button>
        <button
          onClick={() => alert("Church clicked!")}
          className="w-1/6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Church
        </button>
        <button
          onClick={onBack}
          className="w-1/6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    );
  };
  
  export default Watwon;