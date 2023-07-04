import React, { useState } from 'react';
import { BiNavigation } from 'react-icons/bi';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  return (
    <div className=' w-[100%] mx-auto'>
      <form className='flex flex-col '>
        <input
          type='text'
          placeholder='Name *'
          className='w-30 bg-white py-1 px-4 placeholder-black h-12 text-black  focus:outline-none'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Email *'
          className='w-30 bg-white py-1 px-4 placeholder-black h-12 my-5 text-black focus:outline-none'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          // type='text'
          placeholder='Message *'
          className='w-30  bg-white  px-4 placeholder-black h-40 text-black focus:outline-none flex pt-4 border box-border'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='bg-footerBtn w-[50%] h-[45px] my-5 text-black mx-auto flex items-center justify-center gap-3 hover:text-white hover:scale-75 hover:bg-footerBg cursor-pointer hover:border border-footerBtn '>
          <BiNavigation />
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
