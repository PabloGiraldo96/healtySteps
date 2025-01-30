import Image from 'next/image';

const WatwonImage = () => {
  return (
    <div className='place-self-center'>
      <h1 className="text-2xl font-semibold text-center mb-4">Welcome to Watwon</h1>
      <Image
        src="/wantwon.png"
        alt="Watwon"
        width={800}
        height={800}
      />
    </div>
  );
};

export default WatwonImage;