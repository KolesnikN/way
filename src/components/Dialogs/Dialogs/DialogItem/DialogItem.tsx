import React from "react"
import { NavLink } from "react-router-dom"
import cssClass from "./../Dialog.module.css"


type PropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
  let path = "/dialogs/" + props.id

  return (
    <div className={cssClass.dialogsItems}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
