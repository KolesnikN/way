const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const CURRENT_PAGE = "CURRENT_PAGE"
const TOTAL_PAGE = "TOTAL_PAGE"

let initialState = {
  users: [],
  pageSize: 2,
  totalUsersCount: 0,
  currentPage: 2,
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
      return { ...state, users: [...action.users] }
    case CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case TOTAL_PAGE:
      return { ...state, totalUsersCount: action.count }
    default:
      return state
  }
}

export const setUsersAction = (users) => ({ type: SET_USERS, users })
export const followUserChanger = (userID) => ({ type: FOLLOW, userID })
export const unfollowUserChanger = (userID) => ({
  type: UNFOLLOW,
  userID,
})
export const setCurrentPageAction = (currentPage) => ({
  type: CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCountAction = (totalUsersCount) => ({
  type: TOTAL_PAGE,
  count: totalUsersCount,
})

export default userReducer

// let initialState = {
//   users: [
//     {
//       id: 1,
//       follow: true,
//       fullName: "Ilya",
//       status: "I'm free",
//       location: { city: "Warwaw", country: "Poland" },
//       photo:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCY6gNKi2rS6q6c57CrxPzxvajYRGC7n3w4Q&usqp=CAU",
//     },
//     {
//       id: 2,
//       follow: false,
//       fullName: "George",
//       status: "I have a beard. And bear",
//       location: { city: "Minsk", country: "Belarus" },
//       photo:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
//     },
//     {
//       id: 3,
//       follow: true,
//       fullName: "Nikolai",
//       status: "I like node.js",
//       location: { city: "Deriv", country: "Belarus" },
//       photo:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt584rMTJ8Yqb6UxgqiV130sgnmDVEMSp8Bw&usqp=CAU",
//     },
//   ],
// }
