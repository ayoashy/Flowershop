import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import Form from './Form';

const Footer = () => {
  return (
    <div className='w-[100%]  bg-footerBg pt-52 text-white px-10 pb-16'>
      <div className='flex justify-between flex-wrap gap-4 gap-y-20 '>
        <div>
          <h1 className='text-footerBtn mb-8'>MENU</h1>
          <p>Flowers</p>
          <p className='my-8'>Food</p>
          <p>Coffee & Beverages</p>
          <div className='flex gap-3 mt-8'>
            <FaTwitter color='rgb(214 125 62)' size={25} />
            <FaFacebookF color='rgb(214 125 62)' size={25} />
            <FaInstagramSquare color='rgb(214 125 62)' size={25} />
          </div>
        </div>
        <div>
          <h1 className='text-footerBtn'>INFO</h1>
          <p className='my-8'>Blog</p>
          <p>About Us</p>
        </div>
        <div className='flex-1 max-w-[500px] '>
          <h1 className='text-footerBtn mb-8'>Send us a message</h1>
          <Form />
        </div>
      </div>
      <div className='mt-16'>
        <h1>274 Akin Adesola Street, Victoria Island, Lagos.</h1>
        <h1>
          Cafe - <span className='text-footerBtn'>0815 990 6666</span>
        </h1>
        <p>screen with {window.innerWidth}</p>
        <p>screen height {window.innerHeight}</p>
        <h1>
          Flowershop - <span className='text-footerBtn'>0815 990 6666</span>
        </h1>
        <p>contact@flowershop.ng</p>
      </div>
    </div>
  );
};

export default Footer;
