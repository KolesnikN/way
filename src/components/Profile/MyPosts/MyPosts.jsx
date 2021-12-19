import Post from "./Post/Post"
import React from "react"
import cssClass from "./MyPosts.module.css"
// import styled from "styled-components"
import { Field, reduxForm } from "redux-form"

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
)

// const Input = styled.input`
//   size: 2em,
//   color: palevioletred;
//   font-size: 2em;
//   border: 2px solid palevioletred;
//   border-radius: 6px;

//   margin: 200px
//   padding: 200px
// `

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ))

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={cssClass.postBlock}>
      <h3>My posts:</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className="posts">{postElement}</div>
    </div>
  )
}

export default MyPosts
