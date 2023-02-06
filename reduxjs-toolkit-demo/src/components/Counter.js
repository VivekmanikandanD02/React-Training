import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const inc = () => {
    dispatch(counterActions.increment());
  };

  const dec = () => {
    dispatch(counterActions.decrement());
  };

  const increase = () => {
    // if we are passing 10 as argument to increase, it will be considered as action payload in reducer function
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={inc}>Inc Counter</button>
      <button onClick={dec}>Dec Counter</button>
      <button onClick={increase}>Increase Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
