import Post from './Post/Post'
import React from 'react'
import cssClass from './MyPosts.module.css'

let postData = [{id: 1, message: "Privet kak dela to?", likes: 23}, {id: 2, message: "4e delaew", likes: 4}]

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
        <Post message={postData[0].message} likes={postData[0].likes}/>
        <Post message={postData[1].message} likes={postData[1].likes}/>
      </div>
    </div>
  )
}

export default MyPosts;