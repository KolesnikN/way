import Post from './Post/Post'
import React from 'react'
import cssClass from './MyPosts.module.css'

const MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post message={post.message} likes={post.likes}/>)
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
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;