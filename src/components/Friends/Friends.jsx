import React from "react"
import Friend from "./Friend/Friend"
import cssClass from "./Friends.module.css"

const Friends = (props) => {
  debugger
  let friendElement = props.friends.map((friend) => (
    <Friend id={friend.id} name={friend.name} avatar={friend.avatar} />
  ))

  let newFriendElement = React.createRef()

  let addFriend = () => {
    props.addFriend()
  }
  let onFriendNameChange = () => {
    let newName = newFriendElement.current.value
    props.updateFriendName(newName)
  }

  return (
    <div>
      <div className={cssClass.avatar}>{friendElement}</div>
      <div>
        <textarea
          onChange={onFriendNameChange}
          ref={newFriendElement}
          value={props.newFriendName}
        ></textarea>
      </div>
      <div>
        <button onClick={addFriend} className={cssClass.addpost}>
          Add post
        </button>
      </div>
    </div>
  )
}
export default Friends
