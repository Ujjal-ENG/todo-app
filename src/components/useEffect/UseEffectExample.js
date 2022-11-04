import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("UseEffectExample");
  }, [count]);

  return (
    <div>
      {console.log("rendering")}
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(setIsLoading(!isLoading));
        }}
      >
        isLoading
      </button>
    </div>
  );
};

export default UseEffectExample;
