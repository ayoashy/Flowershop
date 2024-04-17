import { useState } from "react";

export const State = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);

  const increaseByOne = () => {
    console.log('increasing, value before', counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0);
  };

  return (
    <div>
      <div>{counter} </div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
      <button onClick={decreaseByOne}>minus</button>
    </div>
  );
};
