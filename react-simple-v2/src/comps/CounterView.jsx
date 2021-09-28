import React from "react";

function CounterView({ number }) {
  const intNum = parseInt(number);
  return (
    <div>
      <div>
        {intNum} 과 20의 합 : {intNum + 20}
      </div>
      <div>
        {intNum} 과 {intNum}의 곱 : {intNum * intNum}
      </div>
    </div>
  );
}

export default CounterView;
