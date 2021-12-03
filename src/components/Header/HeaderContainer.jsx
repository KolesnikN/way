import React from "react"
import { setAuthUserData } from "../../Redux/auth-reducer"
import { connect } from "react-redux"
import Header from "./Header"
import axios from "axios"

export class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((resp) => {
        if (resp.data.resultCode === 0) {
          let { id, login, email } = resp.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
