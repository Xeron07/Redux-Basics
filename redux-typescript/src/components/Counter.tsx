import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [addBy, setAddBy] = useState<number>(0);
  const { count, increase, decrease, increaseBy } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            increase();
          }}>
          +
        </button>
        <button
          onClick={() => {
            decrease();
          }}>
          -
        </button>
      </div>
      <div>
        <input
          type='number'
          value={addBy}
          onChange={(e) => setAddBy(Number(e.target.value) || 0)}
        />
        <button
          onClick={() => {
            increaseBy(addBy);
          }}>
          Add by {addBy}
        </button>
      </div>
    </div>
  );
};

export default Counter;
