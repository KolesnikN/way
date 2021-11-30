const ADD_POST = "ADD_POST"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"

let initialState = {
  posts: [
    { id: 1, message: "Privet kak dela to?", likes: 23 },
    { id: 2, message: "4e delaew", likes: 4 },
  ],
  newPostText: "samuray-way",
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 0,
      }
      let stateCopy = { ...state }
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ""
      return stateCopy
    }
    case UPDATE_POST_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newPostText = action.post
      return stateCopy
    }
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
