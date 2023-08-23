const Hero = () => {
  return (
    <div className='w-full text-center'>
      <div className='w-[70%] mx-auto mt-10'>
        <h1 className='leading-10 text-[1.5rem] md:text-[2rem]  font-bold'>
          Your all-in-one culinary,florist, and barista destination.
        </h1>
        <p className='my-10'>
          Flavoured Food,Beautiful Flowers, and Delicious Coffee in a single
          place!
        </p>
        <button className='bg-secondary text-white px-5 py-2 mb-10 hover:bg-transparent hover:text-secondary hover:border-2 hover:border-solid hover:border-secondary hover:scale-75  duration-700'>
          Browse menu
        </button>
      </div>
    </div>
  );
};

export default Hero;
