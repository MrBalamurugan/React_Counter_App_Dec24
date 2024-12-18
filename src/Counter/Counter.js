import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Responsive Counter App</h1>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="buttons">
          <button className="btn btn-increment" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-decrement" onClick={decrement}>
            Decrement
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};


export default Counter