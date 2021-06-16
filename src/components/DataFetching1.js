import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching1 = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    var [bool, setBool] = useState(false)

    const booler = () => {
        console.log(bool); 
        setBool(!bool);
       
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => { console.log(err) })

    }, [id])       //[] v.v.i.p no infinite runs or substitute errs
    return (
        <>
            <input type="number" value={id} onChange={e => setId(e.target.value)} />
            <button type="submit" onClick={booler}>Submit</button>    
            <h1>{bool&&post.title}</h1>
        </> 
    )
}

export default DataFetching1
