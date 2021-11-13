import Post from './Post/Post'
import React from 'react'
import cssClass from './MyPosts.module.css'

const MyPosts = (props) => {
    console.log(props)
    let post = [{id: 1, message: "Privet kak dela to?", likes: 23}, {id: 2, message: "4e delaew", likes: 4}]

    let postElemetns = post.map( post => <Post message={post.message} likes={post.likes}/>)

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