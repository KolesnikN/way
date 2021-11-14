import Post from './Post/Post'
import React from 'react'
import cssClass from './MyPosts.module.css'

const MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);

    }
    return (
        <div className={cssClass.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost } className={cssClass.addPost}>Add post</button>
            </div>
            <div className='posts'>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;