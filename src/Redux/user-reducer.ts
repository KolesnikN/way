import { PhotosType } from "./../types/types"
import { usersAPI } from "../components/api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const CURRENT_PAGE = "CURRENT_PAGE"
const TOTAL_PAGE = "TOTAL_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

type UserType = {
  id: number
  name: string
  status: string | null
  followed: boolean
  photos: PhotosType
}

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
}

export type InitialStateType = typeof initialState

const userReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, follow: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, follow: false }
          }
          return user
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case TOTAL_PAGE:
      return { ...state, totalUsersCount: action.count }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}

type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({
  type: SET_USERS,
  users,
})
type FollowType = {
  type: typeof FOLLOW
  userID: number
}
export const follow = (userID: number): FollowType => ({ type: FOLLOW, userID })
type UnfollowType = {
  type: typeof UNFOLLOW
  userID: number
}
export const unfollow = (userID: number): UnfollowType => ({
  type: UNFOLLOW,
  userID,
})
type SetCurrentPageType = {
  type: typeof CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: CURRENT_PAGE,
  currentPage,
})
type SetTotalUsersCountType = {
  type: typeof TOTAL_PAGE
  count: number
}
export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountType => ({
  type: TOTAL_PAGE,
  count: totalUsersCount,
})
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const getAuthUserData = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      debugger
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export default userReducer
