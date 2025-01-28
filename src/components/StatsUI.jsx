"use client";

import { useState, useEffect } from 'react';
import XpTree from './XpTree'; 

const StatsUI = () => {
  const [steps, setSteps] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [lastWaterClick, setLastWaterClick] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [statPoints, setStatPoints] = useState(0);
  const [maxXp, setMaxXp] = useState(128);
  const [showXpTree, setShowXpTree] = useState(false); 
  const [strength, setStrength] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [agility, setAgility] = useState(10);
  const [endurance, setEndurance] = useState(10);

  const getWeightedRandomXP = () => {
    const random = Math.random();
    const weightedXP = Math.floor(Math.pow(random, 2) * 16) + 1;
    return weightedXP;
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.DeviceMotionEvent) {
      const handleMotionEvent = (event) => {
        const { acceleration } = event;

        if (acceleration.y > 1.5) {
          setSteps((prevSteps) => prevSteps + 1);
          setXp((prevXp) => {
            const newXp = prevXp + 10;
            if (newXp >= maxXp) {
              setLevel((prevLevel) => prevLevel + 1);
              setStatPoints((prevStatPoints) => prevStatPoints + 1);
              setMaxXp((prevMaxXp) => prevMaxXp * 2);
              return 0;
            }
            return newXp;
          });
        }
      };

      window.addEventListener('devicemotion', handleMotionEvent);

      return () => {
        window.removeEventListener('devicemotion', handleMotionEvent);
      };
    } else {
      console.log('Device motion is not supported on this device.');
    }
  }, [maxXp]);

  const handleWaterClick = () => {
    const now = new Date();
    if (!lastWaterClick || now - lastWaterClick >= 60 * 60 * 1000) {
      const gainedXP = getWeightedRandomXP();
      setWaterIntake((prevWater) => prevWater + 1);
      setLastWaterClick(now);
      setCooldown(60 * 60);
      setXp((prevXp) => {
        const newXp = prevXp + gainedXP;
        if (newXp >= maxXp) {
          setLevel((prevLevel) => prevLevel + 1);
          setStatPoints((prevStatPoints) => prevStatPoints + 1);
          setMaxXp((prevMaxXp) => prevMaxXp * 2);
          return newXp - maxXp;
        }
        return newXp;
      });
      alert(`You gained ${gainedXP} XP!`);
    } else {
      alert('You can only log one glass of water per hour.');
    }
  };

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const formatCooldown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="space-y-4">
      {!showXpTree ? (
        // Main Stats View
        <div className="grid grid-cols-3 gap-3">
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
            {/* Endurance Bar */}
            <div className='flex gap-3'>
              <h2 className="text-xl font-semibold">Endurance: </h2>
              <p className="text-lg">{endurance}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: `${(endurance / 10) * 100}%` }} // Assuming endurance is out of 10
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
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-lg font-semibold">Level: {level}</p>
            <p className="text-lg font-semibold">Gold: </p>
            <p className="text-lg font-semibold">Stat Points: {statPoints}</p>
            <p className="text-lg font-semibold">Strength: {strength}</p>
            <p className="text-lg font-semibold">Intelligence: {intelligence}</p>
            <p className="text-lg font-semibold">Agility: {agility}</p>
            <p className="text-lg font-semibold">Endurance: {endurance}</p>
            <h2 className="text-xl font-semibold">Steps</h2>
            <p className="text-lg">{steps} Traveled</p>
            <h2 className="text-xl font-semibold">Water Intake</h2>
            <p className="text-lg">{waterIntake} Water</p>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleWaterClick}
              disabled={cooldown > 0}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {cooldown > 0 ? `Wait ${formatCooldown(cooldown)}` : 'Log Water'}
            </button>
            <button
              onClick={() => setShowXpTree(true)}
              className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              Skill Tree
            </button>
            <button
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Map
            </button>
            <button
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Inventory
            </button>
            <button
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Merchant 
            </button>
          </div>
        </div>
      ) : (
        // XpTree View
        <div className="space-y-4">
          <XpTree statPoints={statPoints} setStatPoints={setStatPoints} />
          <button
            onClick={() => setShowXpTree(false)}
            className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Back to Stats
          </button>
        </div>
      )}
    </div>
  );
};

export default StatsUI;