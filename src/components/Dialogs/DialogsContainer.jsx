import Dialogs from "./Dialogs"
import {
  addDialogActionCreator,
  updateDialogAction,
} from "../../Redux/dialog-reducer"
import { connect } from "react-redux"
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
import { compose } from "redux"

const mapStateToProps = (state) => {
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

compose()(Dialogs)

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)

export default DialogsContainer
