import React from "react"
import cssClass from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={cssClass.header}>
      <img src="https://funkylife.in/wp-content/uploads/2021/08/good-night-images.jpeg"></img>
    </header>
  )
}

export default Header
