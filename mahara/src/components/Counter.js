import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  }, [counter]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleTitle = () => {
    setTitle("Title Clicked");
  };

  return (
    <>
      <div className="m-2">
        <button
          className="btn btn-secondary m-2"
          onClick={() => setCounter((c) => c + 1)}
        >
          Count up
        </button>
        <span className="badge bg-primary m-2">{counter}</span>
      </div>
      <button className="btn btn-primary m-2" onClick={handleTitle}>
        Change Title
      </button>
    </>
  );
};

export default Counter;
