import React,{useState} from 'react'
//Using count as number counter
const HookCounter = () => {
    const [count,setCount]=useState(0);
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Hook Count {count}</button>
        </>
    )
}

export default HookCounter
