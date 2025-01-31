`use client`

import { useState } from "react";

const SkillTree = ({
  statPoints,
  setStatPoints,
  setCurrentEndurance,
  maxEndurance,
  setMaxEndurance,
  setShowXpTree,
}) => {
  const [strength, setStrength] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [agility, setAgility] = useState(10);

  const allocateStatPoint = (stat) => {
    if (statPoints > 0) {
      switch (stat) {
        case "strength":
          setStrength((prev) => prev + 1);
          break;
        case "intelligence":
          setIntelligence((prev) => prev + 1);
          break;
        case "agility":
          setAgility((prev) => prev + 1);
          break;
        case "endurance":
          setMaxEndurance((prevMax) => prevMax + 1);
          setCurrentEndurance((prevCurrent) => prevCurrent + 1);
          break;
        default:
          break;
      }
      setStatPoints((prev) => prev - 1); 
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-lg">Stat Points Available: {statPoints}</p>
      <p className="text-lg font-semibold">Strength: {strength}</p>
      <p className="text-lg font-semibold">Intelligence: {intelligence}</p>
      <p className="text-lg font-semibold">Agility: {agility}</p>
      <p className="text-lg font-semibold">Endurance: {maxEndurance}</p>
      <div className="grid gap-3">
        <div className="flex place-content-center gap-3">
          <button
            onClick={() => allocateStatPoint("strength")}
            disabled={statPoints === 0}
            className="w-1/4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Increase Strength
          </button>
          <button
            onClick={() => allocateStatPoint("intelligence")}
            disabled={statPoints === 0}
            className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Increase Intelligence
          </button>
        </div>
        <div className="flex place-content-center gap-3">
          <button
            onClick={() => allocateStatPoint("agility")}
            disabled={statPoints === 0}
            className="w-1/4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Increase Agility
          </button>
          <button
            onClick={() => allocateStatPoint("endurance")}
            disabled={statPoints === 0}
            className="w-1/4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Increase Endurance
          </button>
        </div>
      </div>
      <button
        onClick={() => setShowXpTree(false)}
        className="w-1/4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        Back to Main Menu
      </button>
    </div>
  );
};

export default SkillTree;