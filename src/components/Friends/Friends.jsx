import React from "react"
import Friend from "./Friend/Friend"
import cssClass from "./Friends.module.css"

const Friends = (props) => {
  let state = props.friendPage

  let friendElement = state.friends.map((friend) => (
    <Friend id={friend.id} name={friend.name} avatar={friend.avatar} />
  ))

  let newFriendElement = React.createRef()

  let addFriend = () => {
    props.addFriend()
  }
  let onFriendNameChange = () => {
    let newPost = newFriendElement.current.value
    props.updateFriendName(newPost)
  }

  return (
    <div>
      <div className={cssClass.avatar}>{friendElement}</div>
      <div>
        <textarea
          onChange={onFriendNameChange}
          ref={newFriendElement}
          value={state.newFriendName}
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
