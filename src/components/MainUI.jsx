import { useState, useEffect } from "react";
import XpTree from "./SkillTree";
import Inventory from "./Inventory";
import Map from "./Map";
import Stats from "./Stats";
import PlayerInfo from "./PlayerInfo";
import ButtonUi from "./ButtonUi";
import ImageSection from "./ImageSection";
import ExploreMenu from "./ExploreMenu";

const MainUI = () => {
  const [steps, setSteps] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [lastWaterClick, setLastWaterClick] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [statPoints, setStatPoints] = useState(5); 
  const [maxXp, setMaxXp] = useState(128);
  const [showXpTree, setShowXpTree] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Home");
  const [showMap, setShowMap] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [currentEndurance, setCurrentEndurance] = useState(10);
  const [maxEndurance, setMaxEndurance] = useState(10);

  const handleLocationSelect = (location) => {
    const confirmTravel = window.confirm(
      `Do you want to travel to ${location}?`
    );
    if (confirmTravel) {
      setCurrentLocation(location);
      setShowMap(false);
    }
  };

  const handleWaterClick = () => {
    const now = new Date();
    if (!lastWaterClick || now - lastWaterClick >= 60 * 60 * 1000) {
      const gainedXP = getWeightedRandomXP();
      setWaterIntake((prevWater) => prevWater + 1);
      setLastWaterClick(now);
      setCooldown(60 * 60);
      setXp((prevXp) => {
        const newXp = prevXp + gainedXP;
        if (newXp >= maxXp) {
          setLevel((prevLevel) => prevLevel + 1);
          setStatPoints((prevStatPoints) => prevStatPoints + 1); 
          setMaxXp((prevMaxXp) => prevMaxXp * 2);
          return newXp - maxXp;
        }
        return newXp;
      });
      alert(`You gained ${gainedXP} XP!`);
    } else {
      alert("You can only log one glass of water per hour.");
    }
  };

  const getWeightedRandomXP = () => {
    const random = Math.random();
    const weightedXP = Math.floor(Math.pow(random, 2) * 16) + 1;
    return weightedXP;
  };

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const formatCooldown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    const savedSteps = localStorage.getItem("stepsTaken");
    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    }
  }, []);

  useEffect(() => {
    if (steps.length > 0) {
      localStorage.setItem("stepsTaken", JSON.stringify(steps));
    }
  }, [steps]);

  return (
    <div className="p-4 space-y-4">
      <ImageSection
        showInventory={showInventory}
        currentLocation={currentLocation}
      />

      {showExploreMenu && (
        <ExploreMenu
          currentLocation={currentLocation}
          onBack={() => setShowExploreMenu(false)}
        />
      )}

      {!showXpTree && !showInventory && !showMap && !showExploreMenu && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stats
            currentEndurance={currentEndurance}
            maxEndurance={maxEndurance}
            xp={xp}
            maxXp={maxXp}
          />
          <PlayerInfo
            level={level}
            steps={steps}
            waterIntake={waterIntake}
          />
          <ButtonUi
            cooldown={cooldown}
            formatCooldown={formatCooldown}
            handleWaterClick={handleWaterClick}
            setShowXpTree={setShowXpTree}
            setShowInventory={setShowInventory}
            setShowMap={setShowMap}
            setShowExploreMenu={setShowExploreMenu}
          />
        </div>
      )}

      {showXpTree && (
        <XpTree
          statPoints={statPoints}
          setStatPoints={setStatPoints}
          currentEndurance={currentEndurance}
          setCurrentEndurance={setCurrentEndurance}
          maxEndurance={maxEndurance}
          setMaxEndurance={setMaxEndurance}
          setShowXpTree={setShowXpTree}
        />
      )}

      {showInventory && (
        <div className="space-y-4">
          <Inventory waterIntake={waterIntake} />
          <button
            onClick={() => setShowInventory(false)}
            className="w-1/6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Back to Main Menu
          </button>
        </div>
      )}

      {showMap && <Map onLocationSelect={handleLocationSelect} />}
    </div>
  );
};

export default MainUI;