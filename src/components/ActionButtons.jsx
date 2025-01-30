const ActionButtons = ({ cooldown, formatCooldown, handleWaterClick, setShowXpTree, setShowInventory, setShowMap }) => {
    return (
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleWaterClick}
          disabled={cooldown > 0}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {cooldown > 0 ? `Wait ${formatCooldown(cooldown)}` : 'Log Water'}
        </button>
        <button
          onClick={() => { setShowXpTree(true); setShowInventory(false); setShowMap(false); }}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Skill Tree
        </button>
        <button
          onClick={() => { setShowMap(true); setShowXpTree(false); setShowInventory(false); }}
          className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Map
        </button>
        <button
          onClick={() => { setShowInventory(true); setShowXpTree(false); setShowMap(false); }}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Inventory
        </button>
        <button
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Explore
        </button>
        <button
          className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Guild
        </button>
      </div>
    );
  };
  
  export default ActionButtons;