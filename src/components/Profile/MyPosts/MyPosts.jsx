import Post from './Post/Post'
import React from 'react'
import cssClass from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={cssClass.postBlock}>
        <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
        <div>
        <button className={cssClass.addPost}>Add post</button>
      </div>
      <div className='posts'>
        <Post message={"Privet kak dela to?"} likes={"2"}/>
        <Post message={"4e delaew"} likes={"3"}/>
      </div>
    </div>
  )
}

export default MyPosts;