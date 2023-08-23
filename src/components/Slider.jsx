import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const Images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVhcmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdHVhcmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 2 ',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1514537193821-ed4955693802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdHVhcmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1600891965230-bab485b08bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3R1YXJhbnQlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1604329756574-bda1f2cada6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 6',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1608500218861-01091cdc501e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 7',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 8',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Image 9',
    },
  ];
  return (
    <div className='h-52 w-full bg-green-300'>
      {/* <Slider {...settings}>
        {Images.map((item) => (
          <div key={item.id} className='h-52 w-52 '>
            <img
              src={item.src}
              alt={item.alt}
              className='h-full w-full object-cover'
            />
            <h2 className='title'>{item.alt}</h2>
          </div>
        ))}
      </Slider> */}
      slider to be here
    </div>
  );
};

export default SliderComponent;
