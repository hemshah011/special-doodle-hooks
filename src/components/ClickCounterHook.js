import React,{useState,useEffect} from 'react'
//Using count as number counter
const ClickCounterHook = () => {
    const [count,setCount]=useState(0);

    useEffect(() => {
        document.title=`Clicked ${count} times`
    },)
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Hook Count {count}</button>
        </>
    )
}

export default ClickCounterHook
