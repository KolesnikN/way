import { usersAPI, profileAPI } from "../components/api/api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

type PostType = {
  id: number
  message: string
  likes: number
}
type ProfileType = {
  profile: string
  status: string
}

let initialState = {
  posts: [
    { id: 1, message: "Privet kak dela to?", likes: 23 },
    { id: 2, message: "4e delaew", likes: 4 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "" as ProfileType | string,
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = action.newPostText
      return {
        ...state,
        newPostText: action.newPostText,
        posts: [...state.posts, { message: newPost }],
      }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
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
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
})
type setStatusType = {
  type: typeof SET_STATUS
  status: ProfileType
}
export const setStatus = (status: ProfileType): setStatusType => ({
  type: SET_STATUS,
  status,
})

export const getStatus = (userId: any) => (dispatch: any) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status: any) => (dispatch: any) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}
export const getUserProfile = (userId: any) => {
  return (dispatch: any) => {
    usersAPI.getProfile(userId).then((resp) => {
      dispatch(setUserProfile(resp.data))
    })
  }
}
export default profileReducer
