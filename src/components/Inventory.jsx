"use client";

import { useState, useEffect } from "react";

const Inventory = ({ waterIntake }) => {
  const [inventory, setInventory] = useState(Array(12).fill(null));
  const [lastWaterIntake, setLastWaterIntake] = useState(0);

  // Load inventory from localStorage on a component

  useEffect(() => {
    const savedInventory = localStorage.getItem("gameInventory");
    if (savedInventory) {
      setInventory(JSON.parse(savedInventory));
    }
    const savedWaterIntake = localStorage.getItem("lastWaterIntake");
    if (savedWaterIntake) {
      setLastWaterIntake(Number.parseInt(savedWaterIntake));
    }
  }, []);

  // Handle waterIntake changes

  useEffect(() => {
    if (waterIntake > lastWaterIntake) {
      addItemToInventory({ type: "water", count: waterIntake });
      setLastWaterIntake(waterIntake);
      localStorage.setItem("lastWaterIntake", waterIntake.toString());
    }
  }, [waterIntake, lastWaterIntake]);

  const addItemToInventory = (item) => {
    const newInventory = [...inventory];
    const firstEmptySlotIndex = newInventory.findIndex((slot) => slot === null);

    if (firstEmptySlotIndex !== -1) {
      newInventory[firstEmptySlotIndex] = item;
      setInventory(newInventory);

      // Save to localStorage  after adding item

      localStorage.setItem("gameInventory", JSON.stringify(newInventory));
    } else {
      alert("Inventory full!");
    }
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = Number.parseInt(e.dataTransfer.getData("text/plain"));

    // Preventing dropping on the same slot

    if (dragIndex === dropIndex) return;

    const newInventory = [...inventory];

    // Swapping items

    const draggedItem = newInventory[dragIndex];
    newInventory[dragIndex] = newInventory[dropIndex];
    newInventory[dropIndex] = draggedItem;

    setInventory(newInventory);

    // Save to localStorage immediately after swapping

    localStorage.setItem("gameInventory", JSON.stringify(newInventory));
  };

  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-rows-3 grid-cols-4 gap-4 w-full max-w-2xl">
        {inventory.map((item, index) => (
          <div
            key={index}
            className={`
              aspect-square p-4 rounded-lg border 
              ${item ? "cursor-move" : "cursor-default"}
              bg-gray-100 dark:bg-gray-800 
              border-gray-300 dark:border-gray-700 
              flex items-center justify-center 
              transition-all duration-200
              hover:bg-gray-200 dark:hover:bg-gray-700
              ${item ? "shadow-sm hover:shadow-md" : ""}
            `}
            draggable={!!item}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item && (
              <div className="text-2xl select-none">
                {item.type === "water" && `💧${item.count}`}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
