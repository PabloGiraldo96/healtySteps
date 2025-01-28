"use client";

import { useState, useEffect } from 'react';

const StatsUI = () => {
  const [steps, setSteps] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [lastWaterClick, setLastWaterClick] = useState(null);
  const [cooldown, setCooldown] = useState(0); 
  const [xp, setXp] = useState(0); 
  const [level, setLevel] = useState(1);
  const maxXp = 1000;

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
  }, []);

  const handleWaterClick = () => {
    const now = new Date();
    if (!lastWaterClick || now - lastWaterClick >= 60 * 60 * 1000) {
      setWaterIntake((prevWater) => prevWater + 1);
      setLastWaterClick(now);
      setCooldown(60 * 60);
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
      <div className='grid grid-cols-3 gap-3'>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">XP</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-yellow-500 h-4 rounded-full"
              style={{ width: `${(xp / maxXp) * 100}%` }} // XP bar width as a percentage
            ></div>
          </div>
          <p className="text-lg">{xp} / {maxXp} XP</p>
          <h2 className="text-xl font-semibold">Health</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `100%` }}
            ></div>
          </div>
          <p className="text-lg">100 HP</p>
          <h2 className="text-xl font-semibold">Mana</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `100%` }} 
            ></div>
          </div>
          <p className="text-lg">100 MP</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold">LVL</h2>
            <p className="text-lg">Level {level}</p>
          <h2 className="text-xl font-semibold">Steps</h2>
            <p className="text-lg">{steps} Traveled</p>
          <h2 className="text-xl font-semibold">Water Intake</h2>
            <p className="text-lg">{waterIntake} Water</p>
        </div>
        <div>
          <button
            onClick={handleWaterClick}
            disabled={cooldown > 0}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {cooldown > 0 ? `Wait ${formatCooldown(cooldown)}` : 'Log Water'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsUI;