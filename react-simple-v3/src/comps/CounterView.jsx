import React from "react";

function CounterView({ count }) {
  const number = Number(count);
  return (
    <div>
      <div>
        {number} + 20 = {number + 20}
      </div>
      <div>
        {number} x {number} = {number * number}
      </div>
    </div>
  );
}

export default CounterView;
