"use client";

const Inventory = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-rows-3 grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700"
          >
            {/* Empty box */}
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowInventory(false)}
        className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        Back to Stats
      </button>
    </div>
  );
};

export default Inventory;