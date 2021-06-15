import React,{useState} from 'react'
//Using name is a object...demonstrating necessity of spread
const HookCounter3 = () => {
    const [name,setName]=useState({firstName:'',lastName:''})
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
            <h1>{name.firstName} {name.lastName}</h1>
        </form>
    )
}

export default HookCounter3
