const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const CURRENT_PAGE = "CURRENT_PAGE"
const TOTAL_PAGE = "TOTAL_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
}

const userReducer = (state = initialState, action) => {
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

export const setUsers = (users) => ({ type: SET_USERS, users })
export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({
  type: UNFOLLOW,
  userID,
})
export const setCurrentPage = (currentPage) => ({
  type: CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: TOTAL_PAGE,
  count: totalUsersCount,
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export default userReducer
