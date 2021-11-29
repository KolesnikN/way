import Dialogs from "./Dialogs"
import {
  addDialogActionCreator,
  updateDialogAction,
} from "../../Redux/dialog-reducer"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  debugger
  return {
    dialogPage: state.dialogPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addDialog: () => {
      dispatch(addDialogActionCreator())
    },
    updateDialog: (text) => {
      dispatch(updateDialogAction(text))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
