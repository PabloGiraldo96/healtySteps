"use client";

const Inventory = ({ waterIntake }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-rows-3 grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex items-center justify-center"
          >
            {/* Display water count in the first slot for now */}
            {index === 0 && waterIntake > 0 && (
              <div className="text-2xl">
                💧{waterIntake}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;