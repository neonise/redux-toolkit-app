import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByVal, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementVal, setIncrementVal] = useState(3);
  //const addValue = Number(incrementVal) || 0;

  const resetAll = () => {
    setIncrementVal(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={incrementVal}
        onChange={(e) => {
          setIncrementVal(e.target.value);
        }}
      />

      <div>
        <button onClick={() => dispatch(incrementByVal(incrementVal))}>
          Add Amount
        </button>

        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
