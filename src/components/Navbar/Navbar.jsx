import React from 'react'
import cssClass from './Navbar.module.css'

const Navbar = () => {
  return (<nav className={cssClass.nav}>
    <div className={cssClass.item}>
      <a href="/profile">Profile</a>
    </div>
    <div className={`${cssClass.item} ${cssClass.active}`}>
      <a href="/dialogs">Messages</a>
    </div>
    <div className={cssClass.item}>
      <a href="/music">Music</a>
    </div>
    <div className={cssClass.item}>
      <a href="/news">News</a>
    </div>
    <div className={cssClass.item}>
      <a href="/settings">Settings</a>
    </div>
  </nav>)
}

export default Navbar;