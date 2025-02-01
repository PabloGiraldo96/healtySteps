import Home from "./locations/Home";
import WishingWell from "./locations/WishingWell";
import Watwon from "./locations/Watwon";

const ExploreMenu = ({ currentLocation, onBack, setGold }) => {
  return (
    <div>
      {currentLocation === "Home" && <Home onBack={onBack} />}
      {currentLocation === "Wishing Well" && (
        <WishingWell onBack={onBack} setGold={setGold} /> 
      )}
      {currentLocation === "Watwon" && <Watwon onBack={onBack} />}
    </div>
  );
};

export default ExploreMenu;