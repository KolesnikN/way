import Dialogs from "./Dialogs"
import {
  addDialogActionCreator,
  updateDialogAction,
} from "../../Redux/dialog-reducer"
import StoreContext from "../../context"

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage
        let addDialog = () => {
          store.dispatch(addDialogActionCreator())
        }

        let onDialogChange = (newDialogText) => {
          store.dispatch(updateDialogAction(newDialogText))
        }
        return (
          <Dialogs
            addDialogAction={addDialog}
            onDialogChange={onDialogChange}
            messagesPage={state}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
