import React,{useState} from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
    const [bool,setBool]=useState(true)
    return (
        <>
        <button onClick={()=>setBool(!bool)}>
            Toggle
        </button>
        {bool&&<HookMouse/>}
        </>
    )
}

export default MouseContainer
