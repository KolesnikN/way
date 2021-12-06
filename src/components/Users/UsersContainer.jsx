import React from "react"
import { connect } from "react-redux"
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleIsFetching,
  getAuthUserData,
} from "../../Redux/user-reducer"
import Users from "./Users"
import Loading from "../common/loading/Loadings"

export class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getAuthUserData(pageNumber, this.props.pageSize)
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFetching,
  getAuthUserData,
})(UsersContainer)
