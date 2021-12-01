import { connect } from "react-redux"
import {
  followUserChanger,
  setCurrentPageAction,
  setTotalUsersCountAction,
  setUsersAction,
  unfollowUserChanger,
} from "../../Redux/user-reducer"
import Users from "./Users"

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
  }
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAction(pageNumber))
    },
    setTotalUsersCount: (totalPage) => {
      dispatch(setTotalUsersCountAction(totalPage))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
