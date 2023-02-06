import { useEffect, useRef, useState } from "react";

function StopWatch(){
const timerRef = useRef(0);
const [count, setCount] = useState(0);

const startTimer = ()=>{
    if(timerRef.current){
        console.log("if(timerRef.current)" +timerRef.current);
        return;
    }
    timerRef.current = setInterval(()=>setCount((count)=>count+1),1000);
    console.log(timerRef.current);
}

const stopTimer = ()=> {
    clearInterval(timerRef.current);
    timerRef.current = 0;
}

useEffect(()=>{
    return ()=>{
        clearInterval(timerRef.current);
    }
},[]);

return (
<div>
    <div>Timer: {count}s</div>
    <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
</div>
);
}

export default StopWatch;