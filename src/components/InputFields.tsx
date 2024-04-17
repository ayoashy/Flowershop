  import React, { useEffect, useRef, useState, RefObject } from 'react';

const InputFields = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Use RefObject instead of MutableRefObject
  const [checkValue, setCheckValue] = useState(true);

  useEffect(() => {
    console.log(inputRef.current?.value,inputRef.current?.checked);
  }, [inputRef.current?.checked]);

  return (
    <div className='bg-green-300 h-screen'>
      <div>
        <label htmlFor="sth">First Radio</label>
        <input
          type="checkbox"
          value={'someValue'}
          onChange={(e) => setCheckValue(e.target.checked)}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default InputFields;
