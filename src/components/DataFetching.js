import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => { console.log(err) })

    }, [])       //[] v.v.i.p no infinite runs or substitute errs
    return (
        <div>
            <ul>
                {posts.length && posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default DataFetching
