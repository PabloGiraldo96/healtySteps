import Image from 'next/image';

const ImageSection = ({ showInventory, currentLocation }) => {
  const getImageSource = () => {
    if (showInventory) {
      return "/inventory.png";
    } else if (currentLocation === "Watwon") {
      return "/wantwon.png";
    } else if (currentLocation === "Wishing Well") {
      return "/wishingwell.png"; 
    } else {
      return "/main.png";
    }
  };

  const getHeading = () => {
    if (showInventory) {
      return "Inventory";
    } else {
      return `${currentLocation}`;
    }
  };

  const getAltText = () => {
    if (showInventory) {
      return "Inventory Screen";
    } else if (currentLocation === "Watwon") {
      return "Watwon";
    } else if (currentLocation === "Wishing Well") {
      return "Wishing Well";
    } else {
      return "Home";
    }
  };

  return (
    <div className='place-self-center'>
      <h1 className="text-2xl font-semibold text-center mb-4">{getHeading()}</h1>
      <Image
        src={getImageSource()}
        alt={getAltText()}
        width={800}
        height={800}
        className='border-black border-2'
      />
    </div>
  );
};

export default ImageSection;