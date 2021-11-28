const ADD_DIALOG = "ADD_DIALOG"
const UPDATE_DIALOG_TEXT = "UPDATE_DIALOG_TEXT"

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      let text = state.newDialogText
      state.dialogs.push({
        id: 3,
        messages: text,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png",
      })
      state.newDialogText = ""
      return state
    case UPDATE_DIALOG_TEXT:
      state.newDialogText = action.message
      return state
    default:
      return state
  }
}

export const addDialogActionCreator = () => ({ type: ADD_DIALOG })
export const updateDialogAction = (message) => ({
  type: UPDATE_DIALOG_TEXT,
  message: message,
})

export default dialogReducer
