import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { getUserProfile, setUserProfile } from "../../Redux/profile-reducer"
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {
  componentDidMount() {
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

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile, setUserProfile })(
  withUrlDataContainerComponent
)
