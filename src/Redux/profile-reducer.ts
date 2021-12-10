import { usersAPI } from "../components/api/api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"

type PostType = {
  id: number
  message: string
  likes: number
}
type ProfileType = {
  prrofile: string
}

let initialState = {
  posts: [
    { id: 1, message: "Privet kak dela to?", likes: 23 },
    { id: 2, message: "4e delaew", likes: 4 },
  ] as Array<PostType>,
  newPostText: "samuray-way",
  profile: null as ProfileType | null,
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any) => {
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

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostActionCreator = (
  newPostText: any
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
})
export const updatePostAction = (post: any) => ({
  type: UPDATE_POST_TEXT,
  post: post,
})

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
})

export const getUserProfile = (userId: any) => {
  return (dispatch: any) => {
    usersAPI.getProfile(userId).then((resp) => {
      dispatch(setUserProfile(resp.data))
    })
  }
}
export default profileReducer
