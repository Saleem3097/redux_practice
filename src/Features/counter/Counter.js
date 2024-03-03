import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="button"
        aria-label="Increment Value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span className="value" style={{ color: themeTextColor }}>
        Count : {count}
      </span>
      <button
        className="button"
        aria-label="Decreament Value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        className="button"
        aria-label="incrementByAmount"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment by 10
      </button>
    </>
  );
};

export default Counter;
