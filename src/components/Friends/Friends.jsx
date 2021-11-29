import React from "react"
import Friend from "./Friend/Friend"
import cssClass from "./Friends.module.css"

const Friends = (props) => {
  let friendElement = props.state.friends.map((friend) => (
    <Friend id={friend.id} name={friend.name} avatar={friend.avatar} />
  ))

  return <div className={cssClass.avatar}>{friendElement}</div>
}
export default Friends
