import Image from 'next/image';

const HomeImage = () => {
  return (
    <div className='place-self-center'>
      <h1 className="text-2xl font-semibold text-center mb-4">Welcome Home</h1>
      <Image
        src="/main.png"
        alt="Home"
        width={800}
        height={800}
      />
    </div>
  );
};

export default HomeImage;