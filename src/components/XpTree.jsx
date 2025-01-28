const XpTree = ({ statPoints, allocateStatPoint }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Skill Tree</h2>
      <p className="text-lg">Stat Points: {statPoints}</p>
      <button
        onClick={() => allocateStatPoint('strength')}
        disabled={statPoints === 0}
        className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Increase Strength
      </button>
      <button
        onClick={() => allocateStatPoint('intelligence')}
        disabled={statPoints === 0}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Increase Intelligence
      </button>
      <button
        onClick={() => allocateStatPoint('agility')}
        disabled={statPoints === 0}
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Increase Agility
      </button>
      <button
        onClick={() => allocateStatPoint('endurance')}
        disabled={statPoints === 0}
        className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Increase Endurance
      </button>
    </div>
  );
};

export default XpTree;