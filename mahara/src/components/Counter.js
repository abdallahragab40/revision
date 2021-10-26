import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  const amountRef = useRef();
  const listOfCount = [1, 4, 6, 10, 50];

  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  }, [counter]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    amountRef.current.focus();
  }, [amountRef]);

  const handleTitle = () => {
    setTitle("Title Clicked");
  };

  const counterClick = useCallback(
    (n) => {
      setCounter((c) => c + n);
    },
    [setCounter]
  );

  return (
    <>
      <input type="text" className="form-control m-2" ref={amountRef} />
      {listOfCount.map((count) => (
        <Button label={count} counterFn={counterClick} key={count} n={count} />
      ))}
      <div className="m-2">
        <Button label="count up" counterFn={counterClick} n={1} />
        <span className="badge bg-primary m-2">{counter}</span>
      </div>
      <button className="btn btn-primary m-2" onClick={handleTitle}>
        Change Title
      </button>
    </>
  );
};

export default Counter;
