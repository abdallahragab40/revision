import React, { useReducer } from "react";
import { Button } from "./Button";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <Button label="Inc" onClick={() => dispatch({ type: INCREMENT })} />
      <h1>{state.count}</h1>
      <Button label="Dec" onClick={() => dispatch({ type: DECREMENT })} />
    </div>
  );
};
