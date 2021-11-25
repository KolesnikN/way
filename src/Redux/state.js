const ADD_POST = "ADD_POST"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_DIALOG = "ADD_DIALOG"
const UPDATE_MESS_TEXT = "UPDATE_MESS_TEXT"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Privet kak dela to?", likes: 23 },
        { id: 2, message: "4e delaew", likes: 4 },
      ],
      newPostText: "samuray-way",
    },
    messagesPage: {
      dialogs: [
        {
          id: 1,
          name: "Nick",
          messages: "Kak dela",
          avatar:
            "data:image/jpeg;base64,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",
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
            "data:image/jpeg;base64,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",
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likes: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === ADD_DIALOG) {
      let newMessage = {
        id: 3,
        name: "someone",
        messages: this._state.messagesPage.newDialogText,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png",
      }
      this._state.messagesPage.dialogs.push(newMessage)
      this._state.messagesPage.newDialogText = ""
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_MESS_TEXT) {
      this._state.messagesPage.newDialogText = action.newMess
      this._callSubscriber(this._state)
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostAction = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
})
export const addMessageActionCreater = () => ({ type: ADD_DIALOG })
export const updateMessAction = (message) => ({ type: ADD_POST, text: message })

export default store
