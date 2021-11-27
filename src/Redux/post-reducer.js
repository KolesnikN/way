const ADD_POST = "ADD_POST"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"

const postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText
      state.posts.push({
        id: 3,
        message: text,
        likes: 0,
      })
      state.newPostText = ""
      return state
    case UPDATE_POST_TEXT:
      state.newPostText = action.post
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostAction = (post) => ({
  type: UPDATE_POST_TEXT,
  post: post,
})

export default postReducer
