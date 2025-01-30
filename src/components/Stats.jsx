const Stats = ({ currentEndurance, maxEndurance, xp, maxXp }) => {
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className='flex gap-3'>
          <h2 className="text-xl font-semibold">Health: </h2>
          <p className="text-lg">28 HP</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `100%` }}
          ></div>
        </div>
        <div className='flex gap-3'>
          <h2 className="text-xl font-semibold">Mana: </h2>
          <p className="text-lg">16 MP</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `100%` }}
          ></div>
        </div>
        <div className='flex gap-3'>
          <h2 className="text-xl font-semibold">Endurance: </h2>
          <p className="text-lg">{currentEndurance} / {maxEndurance}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-purple-500 h-4 rounded-full"
            style={{ width: `${(currentEndurance / maxEndurance) * 100}%` }}
          ></div>
        </div>
        <div className='flex gap-3'>
          <h2 className="text-xl font-semibold">Experience: </h2>
          <p className="text-lg">{xp} / {maxXp} XP</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-yellow-500 h-4 rounded-full"
            style={{ width: `${(xp / maxXp) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default Stats;