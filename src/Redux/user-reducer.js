const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
  users: [
    {
      id: 1,
      follow: true,
      fullName: "Ilya",
      status: "I'm free",
      location: { city: "Warwaw", country: "Poland" },
    },
    {
      id: 2,
      follow: false,
      fullName: "George",
      status: "I have a beard. And bear",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 3,
      follow: true,
      fullName: "Nikolai",
      status: "I like node.js",
      location: { city: "Deriv", country: "Belarus" },
    },
  ],
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
            return { ...user, follow: true }
          }
          return user
        }),
      }
    case SET_USERS:
      return { ...state, users: [...state.users, action.users] }
    default:
      return state
  }
}

export const setUserAccountCreator = (users) => ({ type: SET_USERS, users })
export const followUserChanger = (userID) => ({ type: FOLLOW, userID })
export const unfollowUserChanger = (userID) => ({
  type: UNFOLLOW,
  userID,
})

export default userReducer
