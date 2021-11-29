import {
  addPostActionCreator,
  updatePostAction,
} from "../../../Redux/post-reducer"
import MyPosts from "./MyPosts"
import StoreContext from "../../../context"

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }
        let onPostChange = (text) => {
          let action = updatePostAction(text)
          store.dispatch(action)
        }
        return (
          <MyPosts
            updatePost={onPostChange}
            addPostAction={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
