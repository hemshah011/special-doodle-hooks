import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [])
    return (
        <div>
            <h1>Input</h1>
            <input ref={ref} type="text"></input>
        </div>  
    )
}

export default FocusInput
