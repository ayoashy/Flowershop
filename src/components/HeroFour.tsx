import React from 'react';

const HeroFour = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-center mt-16 mb-56'>
      <div
        className='w-[350px] h-[350px] border-2 border-solid border-black bg-red-300
      border-b-0 md:border-b-2
      md:border-r-0'
      ></div>
      <div
        className='w-[350px] h-[350px] border-2 border-solid border-black bg-tertiary
      pl-10 pr-6 flex items-center
      '
      >
        <div>
          <h1 className='font-bold text-lg mb-3'>Visit us today!</h1>
          <p className='font-extralig'>Lets help brighten your day.</p>

          <h3 className='font-bold border-b-2 border-solid border-b-black inline-block my-2'>
            Address:
          </h3>
          <p className=''>274 Akin Adesola Street, Victoria Island, Lagos</p>
          <h3 className='font-bold border-b-2 border-solid border-b-black inline-block my-2'>
            Opening Hours:
          </h3>
          <p className='my-2'>Mondays 8am - 6:30pm</p>
          <p>Tuesdays to Sundays 8am - 11pm</p>
        </div>
      </div>
    </div>
  );
};

export default HeroFour;
