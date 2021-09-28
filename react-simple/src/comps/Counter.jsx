import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incre_count = () => {
    setCount(count + 1);
  };
  const descre_count = () => {
    setCount(count - 1);
  };

  return (
    <div>
      카운트 : {count}
      <div>
        <button onClick={incre_count}>증가</button>
        <button onClick={descre_count}>감소</button>
      </div>
    </div>
  );
}

export default Counter;
