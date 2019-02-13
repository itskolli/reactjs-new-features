import React, {useState} from "react";

const UseStateComponent = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <>
      <h3>useState</h3>
      <h1>{count}</h1>
      <button type="button" onClick={()=>{let i = count + 1; setCount(i)}}>Click to Increment</button>
    </>
  )
};

export default UseStateComponent;

