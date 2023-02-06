import classes from "./Counter.module.css";

import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
   const counter =  useSelector((state)=> state.count);
   const showCounter =  useSelector((state)=> state.showCounter);

   const dispatch = useDispatch();
   
   const increment = () =>{
    dispatch({type:'increment'});
   };

   const decrement = () =>{
    dispatch({type:'decrement'});
   };

   const increase = () =>{
    dispatch({type:'increase', payload: 10});
   };

   const toggleCounter = () =>{
    dispatch({type:'toggleCounter'});
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && 
      <div className={classes.value}>{counter}</div>
      }
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increase}>Increase By 10</button>
      <button onClick={toggleCounter}>Toggle Counter</button> 
    </main>
  );
};

export default Counter;