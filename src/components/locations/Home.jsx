const Home = ({ onBack }) => {
    return (
      <div className="space-y-4 flex flex-col place-items-center">
        <button className="w-1/6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Storage
        </button>
        <button className="w-1/6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Sleep
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
  
  export default Home;