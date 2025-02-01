const WishingWell = ({ onBack, setGold }) => {
  const handleSellWater = () => {
    const gold = getWeightedRandomGold();
    setGold((prevGold) => prevGold + gold); 
    alert(`You sold water and earned ${gold} gold!`);
  };

  const getWeightedRandomGold = () => {
    const minGold = 50;
    const maxGold = 100;
    const range = maxGold - minGold + 1;

    const random = Math.random();
    const weightedRandom = Math.pow(random, 2);
    const gold = Math.floor(minGold + weightedRandom * range);

    return gold;
  };

  return (
    <div className="space-y-4 flex flex-col place-items-center">
      <button
        onClick={handleSellWater}
        className="w-1/6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Sell Water
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

export default WishingWell;