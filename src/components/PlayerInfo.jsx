const PlayerInfo = ({ level, gold, steps, waterIntake }) => {
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-lg font-semibold">Level: {level}</p>
        <p className="text-lg font-semibold">Gold: {gold}</p>
        <p className="text-xl font-semibold">Steps: {steps}</p>
        <p className="text-lg">{steps} Traveled</p>
        <h2 className="text-xl font-semibold">Water Intake</h2>
        <p className="text-lg">{waterIntake} Water</p>
      </div>
    );
  };
  
  export default PlayerInfo;