"use client";

import { useState, useEffect } from "react";

const StepTracker = ({ onStepUpdate }) => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    let stepCount = 0;
    let lastAcceleration = null;

    const handleMotion = (event) => {
      const acceleration = event.accelerationIncludingGravity;

      if (lastAcceleration) {
        const deltaX = Math.abs(acceleration.x - lastAcceleration.x);
        const deltaY = Math.abs(acceleration.y - lastAcceleration.y);
        const deltaZ = Math.abs(acceleration.z - lastAcceleration.z);

        const totalDelta = deltaX + deltaY + deltaZ;

        if (totalDelta > 15) {
          stepCount += 1;
          setSteps((prevSteps) => prevSteps + 1);
          onStepUpdate(stepCount);
        }
      }

      lastAcceleration = acceleration;
    };

    if (typeof DeviceMotionEvent !== "undefined" && DeviceMotionEvent.requestPermission) {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener("devicemotion", handleMotion);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("devicemotion", handleMotion);
    }

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [onStepUpdate]);

  useEffect(() => {
    const savedSteps = localStorage.getItem("stepsTaken");
    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    }
  }, []);

  useEffect(() => {
    if (steps > 0) {
      localStorage.setItem("stepsTaken", JSON.stringify(steps));
    }
  }, [steps]);

  return null;
};

export default StepTracker;