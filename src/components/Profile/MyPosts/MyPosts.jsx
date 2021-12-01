import Post from "./Post/Post"
import React from "react"
import cssClass from "./MyPosts.module.css"
import styled from "styled-components"

const Input = styled.input`
  size: 2em,
  color: palevioletred;
  font-size: 2em;
  border: 2px solid palevioletred;
  border-radius: 6px;

  margin: 200px
  padding: 200px
`

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ))
  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let newPost = newPostElement.current.value
    props.updatePost(newPost)
  }

  return (
    <div className={cssClass.postBlock}>
      <h3>My posts:</h3>
      <div>
        <Input
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          rows="4"
          cols="50"
        ></Input>
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
