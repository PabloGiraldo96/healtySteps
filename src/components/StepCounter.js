"use client";

import { useState, useEffect } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [motionData, setMotionData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotionEvent);
    } else {
      alert('Device motion is not supported on this device.');
    }

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  const handleMotionEvent = (event) => {
    const { acceleration } = event;
    setMotionData(acceleration);

    if (acceleration.y > 1.5) {
      setSteps((prevSteps) => prevSteps + 1);
    }
  };

  return (
    <div>
      <h1>Step Counter</h1>
      <p>Steps: {steps}</p>
      <p>Motion Data: {JSON.stringify(motionData)}</p>
    </div>
  );
};

export default StepCounter;