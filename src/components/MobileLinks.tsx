import React from 'react';

type MobileLinkProp = {
  showMobile: boolean;
};

const MobileLinks = ({ showMobile }: MobileLinkProp) => {
  return (
    <>
      <div
        className={`bg-footerBg block md:hidden pl-4 hover:background-[#] flex items-center h-0 ${
          showMobile && 'h-[200px] '
        }  overflow-hidden duration-300`}
      >
        <div className='relative '>
          <div className='text-footerBtn '>
            <p className='hover:pl-6 duration-300 '>Flowers</p>
            <p className='my-5 hover:pl-6 duration-300'>Cafe</p>
            <p className='hover:pl-6 duration-300 '>About Us</p>
            <p className='my-5 hover:pl-6 duration-300'>Blog</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLinks;
