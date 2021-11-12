import Post from './Post/Post'
import React from 'react'
import cssClass from './MyPosts.module.css'
import postElemetns from "./MyPost/MyPost";

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
          {postElemetns}
      </div>
    </div>
  )
}

export default MyPosts;