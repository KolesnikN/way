import { getProfileAPI } from "../components/api/api"

const ADD_POST = "ADD_POST"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
  posts: [
    { id: 1, message: "Privet kak dela to?", likes: 23 },
    { id: 2, message: "4e delaew", likes: 4 },
  ],
  newPostText: "samuray-way",
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = state.newPostText
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { message: newPost }],
      }
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.post,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
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
export const setUserProfile = (profileId) => ({
  type: SET_USER_PROFILE,
  profile: profileId,
})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    getProfileAPI(userId).then((resp) => {
      dispatch(setUserProfile(resp.data))
    })
  }
}
export default profileReducer
