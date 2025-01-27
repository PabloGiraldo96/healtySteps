"use client";

import { useState, useEffect } from 'react';

const StatsUI = () => {
  const [steps, setSteps] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [lastWaterClick, setLastWaterClick] = useState(null);

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
      alert('+1 glass of water logged!');
    } else {
      alert('You can only log one glass of water per hour.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">Steps</h2>
        <p className="text-lg">{steps} traveled</p>
        <h2 className="text-xl font-semibold">Water Intake</h2>
        <p className="text-lg">{waterIntake} Water</p>
      </div>
      <div>
              <button
          onClick={handleWaterClick}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Log Water
        </button>
      </div>
    </div>

  );
};

export default StatsUI;