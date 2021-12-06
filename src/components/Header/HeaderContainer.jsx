import React from "react"
import { setAuthUserData, authProfile } from "../../Redux/auth-reducer"
import { connect } from "react-redux"
import Header from "./Header"
import { authAPI } from "../api/api"

export class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authProfile()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, { setAuthUserData, authProfile })(
  HeaderContainer
)
