import { useState } from "react";

function Counter() {
  let [num, setNum] = useState(0);
  return (
    <>
      <h2>Counter:{num}</h2>
      <button
        onClick={() => {
          return setNum(num++);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          return setNum(num--);
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
