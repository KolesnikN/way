import React from "react"
import cssClass from "./Dialogs.module.css"
import MyMessages from "./Message/MyMessages"
import Dialog from "./Dialogs/Dialog"

const Dialogs = (props) => {
  let state = props.dialogPage

  let dialogElement = state.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  ))
  let messageElements = state.dialogs.map((message) => (
    <MyMessages message={message.messages} />
  ))

  let newDialogElement = React.createRef()

  let addDialog = () => {
    props.addDialog()
  }
  let onDialogChange = () => {
    let newDialogMess = newDialogElement.current.value
    props.updateDialog(newDialogMess)
  }

  return (
    <div className={cssClass.dialogs}>
      <div className={cssClass.dialogsItems + " " + cssClass.avatar}>
        {dialogElement}
      </div>
      <div className={cssClass.messages}>{messageElements}</div>
      <div>
        <h3>New message</h3>
        <div>
          <textarea
            onChange={onDialogChange}
            ref={newDialogElement}
            value={state.newDialogText}
          ></textarea>
        </div>
        <div>
          <button onClick={addDialog}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
