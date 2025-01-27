"use client";

import { useState, useEffect } from 'react';

const StatsUI = () => {
  const [steps, setSteps] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [lastWaterClick, setLastWaterClick] = useState(null);
  const [cooldown, setCooldown] = useState(0); // Cooldown timer in seconds

  // Step counter logic
  useEffect(() => {
    if (typeof window !== 'undefined' && window.DeviceMotionEvent) {
      const handleMotionEvent = (event) => {
        const { acceleration } = event;

        // Simple step detection logic
        if (acceleration.y > 1.5) {
          setSteps((prevSteps) => prevSteps + 1);
        }
      };

      window.addEventListener('devicemotion', handleMotionEvent);

      return () => {
        window.removeEventListener('devicemotion', handleMotionEvent);
      };
    } else {
      alert('Device motion is not supported on this device.');
    }
  }, []);

  // Water intake button logic
  const handleWaterClick = () => {
    const now = new Date();
    if (!lastWaterClick || now - lastWaterClick >= 60 * 60 * 1000) {
      setWaterIntake((prevWater) => prevWater + 1);
      setLastWaterClick(now);
      setCooldown(60 * 60); // Reset cooldown to 1 hour (in seconds)
    } else {
      alert('You can only log one glass of water per hour.');
    }
  };

  // Cooldown timer logic
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [cooldown]);

  // Format cooldown time into minutes and seconds
  const formatCooldown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
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
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">XP</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-yellow-500 h-4 rounded-full"
            style={{ width: `0%` }} // XP is 0 for now
          ></div>
        </div>
        <p className="text-lg">0 XP</p>
      </div>
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">Health</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `100%` }} // Health is 100 for now
          ></div>
        </div>
        <p className="text-lg">100 HP</p>
      </div>
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">Mana</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `100%` }} // Mana is 100 for now
          ></div>
        </div>
        <p className="text-lg">100 MP</p>
      </div>
    </div>
  );
};

export default StatsUI;