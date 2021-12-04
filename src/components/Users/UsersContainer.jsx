import React from "react"
import { connect } from "react-redux"
import {
  follow,
  toggleIsFetching,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../Redux/user-reducer"
import Users from "./Users"
import Loading from "../common/loading/Loadings"
import { usersAPI } from "../api/api"

export class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        debugger
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(follow(userID))
//     },
//     unfollow: (userID) => {
//       dispatch(unfollow(userID))
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPage(pageNumber))
//     },
//     setTotalUsersCount: (totalPage) => {
//       dispatch(setTotalUsersCount(totalPage))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching))
//     },
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer)
