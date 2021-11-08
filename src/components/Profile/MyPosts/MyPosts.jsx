import Post from './Post/Posts'
import React from 'react'
import cssClass from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className='posts'>
        <Post message={"Privet kak dela to?"} likes={"2"}/>
        <Post message={"4e delaew"} likes={"3"}/>
      </div>
    </div>
  )
}

export default MyPosts;