import React, { useState, useRef } from "react";

const memoObj = {};

const sumFn = (x, y) => {
  return new Promise((resolve, reject) => {
    if (memoObj[x + "x" + y]) resolve(memoObj[x + "x" + y]);
    setTimeout(() => {
      const res = x + y;
      memoObj[x + "x" + y] = res;
      resolve(res);
    }, 2000);
  });
};

export const MemoizationExample = () => {
  const [sum, setSum] = useState(0);
  const firstNum = useRef();
  const lastNum = useRef();

  const handleSum = () => {
    sumFn(+firstNum.current.value, +lastNum.current.value).then((res) => {
      setSum(res);
    });
  };

  return (
    <div className="mt-2">
      sum : {sum}
      <br />
      <input ref={firstNum} className="form-control" />
      <br />
      <input ref={lastNum} className="form-control" />
      <br />
      <button className="btn btn-primary" onClick={handleSum}>
        Calc
      </button>
    </div>
  );
};
