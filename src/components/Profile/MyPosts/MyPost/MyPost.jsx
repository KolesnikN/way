import Post from '../Post/Post'
import React from 'react'

let post = [{id: 1, message: "Privet kak dela to?", likes: 23}, {id: 2, message: "4e delaew", likes: 4}]

let postElemetns = post.map( post => <Post message={post.message} likes={post.likes}/>)

export default postElemetns;