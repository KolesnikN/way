import React from "react"
import cssClass from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import FriendsContainer from "../Friends/FriendsContainer"

const Navbar = (props) => {
  return (
    <nav className={cssClass.nav}>
      <div className={cssClass.item}>
        <NavLink to="/profile" activeClassName={cssClass.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={cssClass.item}>
        <NavLink to="/dialogs" activeClassName={cssClass.activeLink}>
          Dialogs
        </NavLink>
      </div>
      <div className={cssClass.item}>
        <NavLink to="/users" activeClassName={cssClass.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={cssClass.item}>
        <NavLink to="/news" activeClassName={cssClass.activeLink}>
          News
        </NavLink>
      </div>
      <div className={cssClass.item}>
        <NavLink to="/settings" activeClassName={cssClass.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={cssClass.friends}>
        <NavLink to="/friends" activeClassName={cssClass.activeLink}>
          Friends
        </NavLink>
        <FriendsContainer />
      </div>
    </nav>
  )
}

export default Navbar
