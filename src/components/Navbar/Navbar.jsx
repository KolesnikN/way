import React from "react"
import cssClass from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import Friends from "../Friends/Friends"

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
          Messages
        </NavLink>
      </div>
      <div className={cssClass.item}>
        <NavLink to="/music" activeClassName={cssClass.activeLink}>
          Music
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
        <Friends state={props.state} />
      </div>
    </nav>
  )
}

export default Navbar
