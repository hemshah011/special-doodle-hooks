import React,{useState} from 'react'
//Variation of 1 for prev count demo
const HookCounter2 = () => {
    const initialCount=0;
    const [count,setCount]=useState(initialCount);
    const incrementBy5=()=>{
        for(let i=1;i<=5;i++)
        {
            setCount(prevCount=>prevCount+1);
        }
    }
    return (
        <>
            Count ={count}
             <button onClick={()=>setCount(initialCount)}>Reset</button>
             <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
             <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
             <button onClick={incrementBy5}>Increment By 5</button>
        </>
    )
}

export default HookCounter2
