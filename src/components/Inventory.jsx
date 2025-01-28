"use client";

import { useState, useEffect } from 'react';

const Inventory = ({ waterIntake }) => {
  const [inventory, setInventory] = useState(Array(12).fill(null));

  useEffect(() => {
    if (waterIntake > 0) {
      const newInventory = [...inventory];
      const firstEmptySlotIndex = newInventory.findIndex((slot) => slot === null);

      if (firstEmptySlotIndex !== -1) {
        newInventory[firstEmptySlotIndex] = { type: 'water', count: waterIntake };
        setInventory(newInventory);
      }
    }
  }, [waterIntake]); 

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index); 
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('text/plain');


    const newInventory = [...inventory];

    const draggedItem = newInventory[dragIndex];
    newInventory[dragIndex] = newInventory[dropIndex];
    newInventory[dropIndex] = draggedItem;

    setInventory(newInventory);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-rows-3 grid-cols-4 gap-4">
        {inventory.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex items-center justify-center"
            draggable={!!item} 
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item && (
              <div className="text-2xl">
                {item.type === 'water' && `💧${item.count}`}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;