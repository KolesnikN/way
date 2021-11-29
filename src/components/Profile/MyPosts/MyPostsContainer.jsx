import {
  addPostActionCreator,
  updatePostAction,
} from "../../../Redux/post-reducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updatePost: (text) => {
      dispatch(updatePostAction(text))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
