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
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;