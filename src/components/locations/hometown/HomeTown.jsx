import HomeActions from './HomeActions';

const HomeTown = ({ onTravelToWatwon }) => {
  return (
    <div className="space-y-4">
      <HomeActions onTravelToWatwon={onTravelToWatwon} />
    </div>
  );
};

export default HomeTown;