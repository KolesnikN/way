import { connect } from "react-redux"
import React, { Redirect } from "react"
import { Login } from "../components/Login/Login"

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
})
debugger
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Login to="/login" />

      return <Component {...this.props} />
    }
  }
  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  )
  return ConnectAuthRedirectComponent
}
