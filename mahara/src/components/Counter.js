import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [divData, setDivData] = useState({});
  const [listOfCount, setListOfCount] = useState([1]);
  const divRef = useRef();

  useEffect(() => {
    setDivData(divRef.current.getBoundingClientRect());
  }, [listOfCount]);

  const onClick = useCallback(
    (n) => {
      setCounter((c) => c + n);
    },
    [setCounter]
  );

  const AddMoreButton = () => {
    setListOfCount([...listOfCount, 50]);
  };

  return (
    <>
      <div className="m-2">
        <Button label="Add more" onClick={AddMoreButton} />
        <div ref={divRef}>
          {listOfCount.map((count) => (
            <>
              <Button label={count} counterFn={onClick} key={count} n={count} />
              <br />
            </>
          ))}
        </div>
        <br />
        <span className="badge bg-primary m-2">{counter}</span>
        <br />
        <pre>{JSON.stringify(divData, null, 2)}</pre>
      </div>
    </>
  );
};

export default Counter;
