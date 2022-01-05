import Friends from "./Friends"
import { connect } from "react-redux"
import {
  addFriendsActionCreator,
  updateFriendNameAction,
} from "../../redux/friends-reducer"

const mapStateToProps = (state) => {
  return {
    friends: state.friendPage.friends,
    newFriendName: state.friendPage.newFriendName,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFriend: () => {
      dispatch(addFriendsActionCreator())
    },
    updateFriendName: (name) => {
      dispatch(updateFriendNameAction(name))
    },
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
