import React from "react"
import { connect } from "react-redux"
import {
  followUserChanger,
  toggleIsFetchingCreator,
  setCurrentPageAction,
  setTotalUsersCountAction,
  setUsersAction,
  unfollowUserChanger,
} from "../../Redux/user-reducer"
import Users from "./Users"
import axios from "axios"
import Loading from "../common/loading/Loadings"

export class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(resp.data.items)
        this.props.setTotalUsersCount(resp.data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(resp.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Loading /> : null}
        <Users
          pageSize={this.props.pageSize}
          pageNumber={this.props.pageNumber}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
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
      dispatch(setUsersAction(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAction(pageNumber))
    },
    setTotalUsersCount: (totalPage) => {
      dispatch(setTotalUsersCountAction(totalPage))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingCreator(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
