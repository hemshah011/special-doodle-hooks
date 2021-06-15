import React, { useState } from 'react'
//Using items as an array of objects
const HookCounter4 = () => {
    const [items, setItems] = useState([])
    const addNumber = () => {
        setItems([...items, { id: items.length, value: Math.random() * 10 }])
    }
    return (
        <>
            <button onClick={addNumber}>
                Add a number
            </button>
            <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
            </ul>
        </>
    )
}

export default HookCounter4
