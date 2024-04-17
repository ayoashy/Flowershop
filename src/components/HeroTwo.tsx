import React, { useState } from 'react';
import { State } from './State';
const Image: string =
  'https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsaW5hcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60';

const HeroTwo = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className=' w-[90%] flex justify-center items-center mt-10 flex-col sm:flex-row  mx-auto mb-10'>
      <div className='border-2 border-b-0 sm:border-b-2 sm:border-r-0 border-solid border-secondary  w-[300px] h-[300px]'>
        <img
          className='object-cover object-center w-full h-full'
          src={Image}
          alt=''
        />
      </div>
      <div className='pt-14 pl-6 w-[300px] h-[300px] border-2 border-solid border-secondary bg-[#f9e4d4]'>
        <h2 className='font-bold text-md mb-4'>Satisfying your senses</h2>
        <p className='mb-4'>
          Discover the passion behind every sip, bite and bloom at Flowershop
          Cafe
        </p>
        <button
          onClick={() => setCounter(counter + 1)}
          className='bg-secondary text-white px-5 py-2 mb-10 hover:bg-transparent hover:text-secondary hover:border-2 hover:border-solid hover:border-secondary hover:scale-75  duration-700'
        >
          Browse menu {counter}
        </button>
      </div>
      <State />
    </div>
  );
};

export default HeroTwo;
