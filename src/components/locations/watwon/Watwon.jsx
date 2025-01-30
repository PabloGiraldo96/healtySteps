import WatwonActions from './WatwonActions';

const Watwon = ({ onReturnHome }) => {
  return (
    <div className="space-y-4">
      <WatwonActions onReturnHome={onReturnHome} />
    </div>
  );
};

export default Watwon;