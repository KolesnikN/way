import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import axios from "axios"
import { setUserProfile } from "../../Redux/profile-reducer"

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((resp) => {
        this.props.setUserProfile(resp.data)
      })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
