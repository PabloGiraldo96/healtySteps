import WatwonImage from './WatwonImage';
import WatwonActions from './WatwonActions';

const Watwon = ({ onReturnHome }) => {
  return (
    <div className="space-y-4">
      <WatwonImage />
      <WatwonActions onReturnHome={onReturnHome} />
    </div>
  );
};

export default Watwon;