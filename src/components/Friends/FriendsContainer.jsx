import Friends from "./Friends"
import { connect } from "react-redux"
import {
  addFriendsActionCreator,
  updateFriendNameAction,
} from "../../Redux/friends-reducer"

const mapStateToProps = (state) => {
  return {
    friendPage: state.friendPage,
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
