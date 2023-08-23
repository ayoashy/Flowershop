import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

// SwiperCore.use([Autoplay, Navigation, Pagination]);

const images = [
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

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      autoplay={true}
      // navigation
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id} data-swiper-autoplay='2000'>
          <div className='h-52 w-full'>
            <img
              src={image.src}
              alt={image.alt}
              className='w-full object-cover h-full'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// <Swiper
//   // install Swiper modules
//   modules={[Navigation, Pagination, Scrollbar, A11y]}
//   spaceBetween={50}
//   slidesPerView={3}
//   navigation
//   pagination={{ clickable: true }}
//   scrollbar={{ draggable: true }}
//   onSwiper={(swiper) => console.log(swiper)}
//   onSlideChange={() => console.log('slide change')}
// >
//   <SwiperSlide>Slide 1</SwiperSlide>
//   <SwiperSlide>Slide 2</SwiperSlide>
//   <SwiperSlide>Slide 3</SwiperSlide>
//   <SwiperSlide>Slide 4</SwiperSlide>
//   ...
// </Swiper>;
