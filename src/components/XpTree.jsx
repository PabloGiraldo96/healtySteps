"use client";

import { useState } from 'react';

const XpTree = ({ statPoints, setStatPoints }) => {
  const [skills, setSkills] = useState({
    strength: { level: 0, cost: 1 },
    agility: { level: 0, cost: 1 },
    intelligence: { level: 0, cost: 1 },
    endurance: { level: 0, cost: 1 },
  });

  const handleSkillUpgrade = (skill) => {
    if (statPoints >= skills[skill].cost) {
      setSkills((prevSkills) => ({
        ...prevSkills,
        [skill]: {
          ...prevSkills[skill],
          level: prevSkills[skill].level + 1,
          cost: prevSkills[skill].cost + 1,
        },
      }));
      setStatPoints((prevStatPoints) => prevStatPoints - skills[skill].cost);
    } else {
      alert('Not enough stat points!');
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Skill Tree</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(skills).map((skill) => (
          <div key={skill} className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold capitalize">{skill}</h3>
            <p className="text-md">Level: {skills[skill].level}</p>
            <p className="text-md">Cost: {skills[skill].cost} points</p>
            <button
              onClick={() => handleSkillUpgrade(skill)}
              disabled={statPoints < skills[skill].cost}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Upgrade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XpTree;