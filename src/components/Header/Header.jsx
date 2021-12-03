import React from "react"
import { NavLink } from "react-router-dom"
import cssClass from "./Header.module.css"

const Header = (props) => {
  debugger
  return (
    <header className={cssClass.header}>
      <img src="https://funkylife.in/wp-content/uploads/2021/08/good-night-images.jpeg" />
      <div className={cssClass.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
