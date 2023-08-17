import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { log } from 'console';

const demoVariants = {
  animate: {
    x: '5rem',
    transition: {
      staggerChildren: 1,
    },
  },
};

const FramerMotionDemo = () => {
  type MyArrayType = {
    id: number;
    name: string;
    age: number;
  };

  type MyArrayInput = Omit<MyArrayType, 'id'>;

  const [myArray, setMyArray] = useState<MyArrayType[]>([]);

  const updateArray = (obj: MyArrayInput) => {
    const newArray = { ...obj, id: myArray.length + 1 };
    setMyArray([...myArray, newArray]);
  };

  console.log(myArray, 'array');

  return (
    <div>
      <motion.div className='m-4' variants={demoVariants} animate='animate'>
        <motion.div
          variants={demoVariants}
          className='w-20 h-20 mb-6 bg-lime-500'
        ></motion.div>
        <motion.div
          variants={demoVariants}
          className='w-20 h-20 mb-6 bg-orange-500'
        ></motion.div>
        <motion.div
          variants={demoVariants}
          className='w-20 h-20 bg-purple-500'
        ></motion.div>
      </motion.div>
      <button
        className='bg-lime-500 p-6'
        onClick={() => updateArray({ name: 'lmao', age: 10 })}
      >
        add button
      </button>
    </div>
  );
};

export default FramerMotionDemo;
