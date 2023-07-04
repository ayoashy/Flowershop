import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

type Card = {
  img: string;
  heading: string;
  text: string;
  id: number;
  color: string;
};

const cards: Card[] = [
  {
    img: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VycyUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    heading: 'Flowers',
    text: 'Providing you with an ultimate experience is our utmost priority.',
    id: 1,
    color: '#faf7e1',
  },
  {
    img: 'https://images.unsplash.com/photo-1529229089-f5719a804879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMGFuZCUyMHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    heading: 'Coffee and Beverages',
    text: 'Providing you with an ultimate experience is our utmost priority.',
    id: 2,
    color: '#fdedca',
  },
  {
    img: 'https://images.unsplash.com/photo-1607490441160-32aa935d3fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3VsaW5hcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
    heading: 'Food',
    text: 'Providing you with an ultimate experience is our utmost priority.',
    id: 3,
    color: '#ffe9e6',
  },
];

const HeroThree = () => {
  return (
    <div className='mt-12 flex flex-col md:flex-row md:justify-center items-center'>
      {cards.map((c) => (
        <div
          className={`w-[250px] h-[400px] border-2 border-solid border-black pl-10 flex items-center pr-2 py-10  first-letter:
          ${c.id !== 3 ? 'md:border-r-0' : ''} 
          ${c.id !== 3 ? 'border-b-0' : ''} 
          ${c.id !== 3 ? 'md:border-b-2' : ''} 
          `}
          key={c.id}
          style={{
            background: c.color,
          }}
        >
          <div>
            <img
              src={c.img}
              alt={c.heading}
              className='w-[150px] h-[150px] mb-4'
            />
            <h1 className='mb-4'>{c.heading}</h1>
            <p className='text-sm mb-6'>{c.text}</p>
            <p className='flex items-center text-secondary hover:scale-90 duration-300 cursor-pointer'>
              Browse Menu
              <FiArrowUpRight />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroThree;
