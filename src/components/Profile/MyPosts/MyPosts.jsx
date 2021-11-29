import Post from "./Post/Post"
import React from "react"
import cssClass from "./MyPosts.module.css"

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ))
  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPostAction()
  }
  let onPostChange = () => {
    let newPost = newPostElement.current.value
    props.updatePost(newPost)
  }

  return (
    <div className={cssClass.postBlock}>
      <h3>My posts:</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <div>
        <button onClick={addPost} className={cssClass.addpost}>
          Add post
        </button>
      </div>
      <div className="posts">{postElement}</div>
    </div>
  )
}

export default MyPosts
