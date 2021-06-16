import React, { useState, useEffect } from 'react'
const ClickCounterHook2 = () => {
    const [item, setItem] = useState({ name: '', value: 0 });

    useEffect(() => {
        console.log('Updating title')
        document.title = `Clicked ${item.value} times`
    },[item.value])
    return (
        <>
            <input type="text" value={item.name} onChange={e => setItem({ ...item, name: e.target.value })} />
            <button onClick={() => setItem({ ...item, value: item.value + 1 })}>Hook Count {item.value}</button>
        </>
    )
}

export default ClickCounterHook2
