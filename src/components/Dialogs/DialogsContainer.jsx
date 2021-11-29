import Dialogs from "./Dialogs"
import {
  addDialogActionCreator,
  updateDialogAction,
} from "../../Redux/dialog-reducer"

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage

  let addDialog = () => {
    props.store.dispatch(addDialogActionCreator())
  }
  let onDialogChange = (newDialogText) => {
    props.store.dispatch(updateDialogAction(newDialogText))
  }

  return (
    <Dialogs
      addDialogAction={addDialog}
      onDialogChange={onDialogChange}
      messagesPage={state}
    />
  )
}

export default DialogsContainer
