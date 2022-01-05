import Dialogs from "./Dialogs"
import { addDialogActionCreator } from "../../redux/dialog-reducer"
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
    sendMessage: (newMessageBody) => {
      dispatch(addDialogActionCreator(newMessageBody))
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
