import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type NavProp = {
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
  showMobile: boolean;
};

type Links = {
  link: string;
  id: number;
  url: string;
};

const links: Links[] = [
  {
    link: 'Flowers',
    url: '/flowers',
    id: 1,
  },
  {
    link: 'Cafe',
    url: '/cafe',
    id: 2,
  },
  {
    link: 'About Us',
    url: '/about-us',
    id: 3,
  },
  {
    link: 'Blog',
    url: '/blog',
    id: 4,
  },
];

const Nav = ({ setShowMobile, showMobile }: NavProp) => {
  return (
    <>
      <div className='w-full flex justify-between h-10 items-center px-5'>
        <div>
          <div
            className='md:hidden cursor-pointer'
            onClick={() => setShowMobile(!showMobile)}
          >
            {showMobile ? <GrClose /> : <GiHamburgerMenu />}
          </div>

          <div className='hidden md:flex list-none'>
            {links.map((link) => (
              <Link
                to={link.url}
                className='mr-2 text-sm md:text-sm lg:text-md cursor-pointer hover:bg-secondary hover:text-white py-1 px-2 rounded-sm duration-700 ease-in-out'
                key={link.id}
              >
                {link.link}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          <h1 className='text-lg'>FLOWERSHOP</h1>
          <p className='font-styled'>Cafe</p>
        </div>
        <div className='relative '>
          <AiOutlineShopping size={30} />
          <div
            className='absolute right-0 top-0 bg-secondary rounded-lg w-4 h-4
          flex justify-center items-center
          '
          >
            <p className='text-white text-[0.7rem]'>1</p>
          </div>
        </div>
      </div>
      <div className='w-100 h-[2.5px]  bg-secondary'></div>
    </>
  );
};

export default Nav;
