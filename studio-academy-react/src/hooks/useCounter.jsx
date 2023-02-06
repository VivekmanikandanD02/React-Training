import { useEffect, useState } from "react";

//Custom Counter Hook
const useCounter = (increment = true)=> {
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
      const interval = setInterval(()=>{
        if(increment)
        setCounter((prevCounter)=>prevCounter-1);
        else
        setCounter((prevCounter)=>prevCounter-1);
      },1000)
      return ()=> clearInterval(interval);
    });

    //return from function
    return counter;
}

export default useCounter;