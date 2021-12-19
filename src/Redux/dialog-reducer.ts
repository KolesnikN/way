const ADD_DIALOG = "ADD_DIALOG"

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
      // let body = action.newMessageBody
      return {
        ...state,
        dialogs: [...state.dialogs], //{ id: 6, message: body }],
      }
    }
    default:
      return state
  }
}

type addDialogActionCreatorType = {
  type: typeof ADD_DIALOG
  newMessageBody: string
}


export const addDialogActionCreator = (newMessageBody: any): addDialogActionCreatorType => ({
  type: ADD_DIALOG,
  newMessageBody,
})


export default dialogReducer
