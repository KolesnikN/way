import Post from "./Post/Post"
import React from "react"
import cssClass from "./MyPosts.module.css"

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ))
  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
    props.updatePostText("")
  }
  let onPostChange = () => {
    let newText = newPostElement.current.value
    props.updatePostText(newText)
  }

  return (
    <div className={cssClass.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
      </div>
      <div>
        <button onClick={addPost} className={cssClass.addPost}>
          Add post
        </button>
      </div>
      <div className="posts">{postElement}</div>
    </div>
  )
}

export default MyPosts
