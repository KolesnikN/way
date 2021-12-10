import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { getUserProfile } from "../../Redux/profile-reducer"
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile })
)(ProfileContainer)
