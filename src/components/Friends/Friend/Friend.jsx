import React from "react"
import cssClass from "./Friend.module.css"
import { NavLink } from "react-router-dom"

const Friends = (props) => {
  let path = "/friends/" + props.id
  return (
    <div>
      <NavLink to={path} className={cssClass.box2}>
        <img
          src={props.avatar}
          alt="https://img.freepik.com/free-vector/404-error-with-character-error-design-template-website_114341-24.jpg?size=626&ext=jpg"
        />
        {props.name}
      </NavLink>
    </div>
  )
}
export default Friends
