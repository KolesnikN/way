const ADD_DIALOG = "ADD_DIALOG"
const UPDATE_DIALOG_TEXT = "UPDATE_DIALOG_TEXT"

const dialogReducer = (state, action) => {
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
