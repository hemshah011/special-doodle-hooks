import React,{useState,useEffect} from 'react'

const HookMouse = () => {
    const [item,setItem]=useState({x:0,y:0})
    useEffect(() => {
        console.log('Hook use effect is called')
        window.addEventListener('mousemove', (e)=>{setItem({x:e.clientX,y:e.clientY})})
        return()=>{
            console.log('Component Unmounting')
            window.removeEventListener('mousemove', (e)=>{setItem({x:e.clientX,y:e.clientY})})
        }
    },[])
    return (
        <h1>
            X={item.x} Y={item.y}
        </h1>
    )
}

export default HookMouse
