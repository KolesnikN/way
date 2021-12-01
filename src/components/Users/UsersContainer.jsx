import { connect } from "react-redux"
import {
  followUserChanger,
  setUsersAction,
  unfollowUserChanger,
} from "../../Redux/user-reducer"
import Users from "./Users"

const mapStateToProps = (state) => {
  return { users: state.userPage.users }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followUserChanger(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowUserChanger(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersAction, users)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)