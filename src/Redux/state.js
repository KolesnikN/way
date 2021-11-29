import dialogReducer from "./dialog-reducer"
import postReducer from "./post-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Privet kak dela to?", likes: 23 },
        { id: 2, message: "4e delaew", likes: 4 },
      ],
      newPostText: "samuray-way",
    },
    dialogPage: {
      dialogs: [
        {
          id: 1,
          name: "Nick",
          messages: "Kak dela",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          id: 2,
          name: "Uliana",
          messages: "4to delaew",
          avatar:
            "https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        },
      ],
      newDialogText: "something here",
    },
    ownFriends: {
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
      ],
    },
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log()
  },
  dispatch(action) {
    this._state.profilePage = postReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}

export default store
