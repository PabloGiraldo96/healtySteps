import Image from 'next/image';

const ImageSection = ({ showInventory, currentLocation }) => {
  const getImageSource = () => {
    if (currentLocation === "Watwon") {
      return "/wantwon.png";
    } else {
      return "/main.png";
    }
  };

  return (
    <div className='place-self-center'>
      {showInventory ? (
        <h1 className="text-2xl font-semibold text-center mb-4">Inventory</h1>
      ) : (
        <h1 className="text-2xl font-semibold text-center mb-4">{`Welcome to ${currentLocation}`}</h1>
      )}
      {showInventory ? (
        <Image
          src="/inventory.png"
          alt="Inventory Screen"
          width={800}
          height={800}
        />
      ) : (
        <Image
          src={getImageSource()}
          alt={currentLocation === "Watwon" ? "Watwon" : "Home"}
          width={800}
          height={800}
        />
      )}
    </div>
  );
};

export default ImageSection;