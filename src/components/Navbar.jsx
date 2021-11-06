import React from 'react'
import cssClass from './Navbar.module.css'

const Navbar = () => {
  return (<nav className={cssClass.nav}>
    <div className={cssClass.item}>
      <a>Profile</a>
    </div>
    <div className={`${cssClass.item} ${cssClass.active}`}>
      <a>Messages</a>
    </div>
    <div className={cssClass.item}>
      <a>Music</a>
    </div>
    <div className={cssClass.item}>
      <a>News</a>
    </div>
    <div className={cssClass.item}>
      <a>Settings</a>
    </div>
  </nav>)
}

export default Navbar;