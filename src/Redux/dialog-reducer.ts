const ADD_DIALOG = "ADD_DIALOG"
const UPDATE_DIALOG_TEXT = "UPDATE_DIALOG_TEXT"

export type DialogsType = {
  id: number
  name: string
  messages: string
  avatar: string
}

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
  ] as Array<DialogsType>,
}

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_DIALOG: {
      let newDialog = action.message
      return {
        ...state,
        dialogs: [...state.dialogs], // [...state.dialogs, { id: 6, messages: newDialog }]
      }
    }
    case UPDATE_DIALOG_TEXT: {
      return {
        ...state,
        dialogs: [...state.dialogs],
      }
    }
    default:
      return state
  }
}

type addDialogActionCreatorType = {
  type: typeof ADD_DIALOG
  message: string
}

export const addDialogActionCreator = (
  message: string
): addDialogActionCreatorType => ({
  type: ADD_DIALOG,
  message,
})
export const updateDialogAction = (message: string) => ({
  type: UPDATE_DIALOG_TEXT,
  message: message,
})

export default dialogReducer
