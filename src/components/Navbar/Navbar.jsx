import React from 'react'
import cssClass from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (<nav className={cssClass.nav}>
    <div className={cssClass.item}>
      <NavLink to="/profile" activeClassName={cssClass.activeLink}>Profile</NavLink>
    </div>
    <div className={cssClass.item}>
      <NavLink to="/dialogs" activeClassName={cssClass.activeLink}>Messages</NavLink>
    </div>
    <div className={cssClass.item}>
      <NavLink to="/music" activeClassName={cssClass.activeLink}>Music</NavLink>
    </div>
    <div className={cssClass.item}>
      <NavLink to="/news" activeClassName={cssClass.activeLink}>News</NavLink>
    </div>
    <div className={cssClass.item}>
      <NavLink to="/settings" activeClassName={cssClass.activeLink}>Settings</NavLink>
    </div>
  </nav>)
}

export default Navbar;