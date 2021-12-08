const ADD_FRIEND = "ADD_FRIEND"
const UPDATE_FRIEND_NAME = "UPDATE_FRIEND_NAME"

type FriendsType = {
  id: number
  name: string
  avatar: string
}

let initialState = {
  friends: [
    {
      id: 1,
      name: "Nick",
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    {
      id: 2,
      name: "Uliana",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    },
    {
      id: 3,
      name: "Nikola",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN7kP55J508ra_vUeGcEykw9JlJcmTm5mew&usqp=CAU",
    },
  ] as Array<FriendsType>,
  newFriendName: "someone",
}

// type InitialStateType = typeof initialState

// const friendReducer = (state = initialState, action: any): InitialStateType => FOR FUTURE

const friendReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FRIEND:
      let newFriend = state.newFriendName
      return {
        ...state,
        newFriendName: "",
        friends: [
          ...state.friends,
          {
            name: newFriend,
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png",
          },
        ],
      }
    case UPDATE_FRIEND_NAME:
      return {
        ...state,
        newFriendName: action.name,
      }

    default:
      return state
  }
}

type AddFriendsActionCreatorType = {
  type: typeof ADD_FRIEND
  friend: Array<FriendsType>
}
export const addFriendsActionCreator = (
  friend: Array<FriendsType>
): AddFriendsActionCreatorType => ({
  type: ADD_FRIEND,
  friend,
})
export const updateFriendNameAction = (name: string) => ({
  type: UPDATE_FRIEND_NAME,
  name: name,
})

export default friendReducer
