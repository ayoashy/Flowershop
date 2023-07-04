import React, { useEffect, useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

type Testimony = {
  quote: string;
  picture: string;
  author: string;
  id: number;
};

const testimonies: Testimony[] = [
  {
    quote:
      "I can't thank you enough for your help in my time of need. Your expert guidance and support gave me the strength to get through a difficult situation, and I will always be grateful for it.",
    picture:
      'https://images.unsplash.com/photo-1519763421920-f2d769e01a37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    author: 'Kayle',
    id: 1,
  },
  {
    quote:
      'I am blown away by the quality of service I received from your team. From start to finish, you made the process smooth and stress-free, and your attention to detail and dedication to excellence is unmatched.',
    picture:
      'https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    author: 'Juwon',
    id: 2,
  },
  {
    quote:
      "Your product has completely changed my life for the better. I never thought I could feel this confident and secure, and it's all thanks to your innovative and effective solution.",
    picture:
      'https://images.unsplash.com/photo-1523825036634-aab3cce05919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    author: 'Diana',
    id: 3,
  },
  {
    quote:
      'Your dedication to customer satisfaction is truly remarkable. I have never felt so valued and appreciated as a customer, and your commitment to going above and beyond is truly impressive',
    picture:
      'https://images.unsplash.com/photo-1621905252472-943afaa20e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    author: 'Richard',
    id: 4,
  },
];

const Testimonies = () => {
  const [index, setIndex] = useState<number>(0);
  const { quote, picture, author, id } = testimonies[index];

  const prevSlide = () => {
    setIndex((index) => {
      return index - 1;
    });
  };
  const nextSlide = () => {
    setIndex((index) => {
      return index + 1;
    });
  };

  useEffect(() => {
    const lastSlide = testimonies.length - 1;
    if (index >= lastSlide) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastSlide);
    }
  }, [index]);

  return (
    <article className='bg-tertiary w-full h-[250p] text-center py-8 flex justify-center mt-20 '>
      <div className='w-[80%] '>
        <h1 className='font-bold'>Here's why our customers love us</h1>
        <div className='flex items-center mt-8 '>
          <BiLeftArrowAlt
            size={50}
            onClick={prevSlide}
            className='cursor-pointer'
          />
          <div className='flex flex-col items-center'>
            <p>'{quote}'</p>
            <div className='flex gap-3 items-center mt-6'>
              <img
                src={picture}
                alt={author}
                className='h-[50px] object-cover object-center w-[50px] rounded-full'
              />
              <p>{author}</p>
            </div>
          </div>
          <BiRightArrowAlt
            className='cursor-pointer'
            onClick={nextSlide}
            size={50}
          />
        </div>
      </div>
    </article>
  );
};

export default Testimonies;
