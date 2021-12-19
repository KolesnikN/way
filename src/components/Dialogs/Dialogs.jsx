import React from "react"
import cssClass from "./Dialogs.module.css"
import MyMessages from "./Message/MyMessages"
import Dialog from "./Dialogs/Dialog"
import { reduxForm } from "redux-form"
import AddMessageForm from "./AddMessageForm/AddMessageForm"

const Dialogs = (props) => {
  let state = props.dialogPage

  let dialogElement = state.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  ))
  let messageElements = state.dialogs.map((message) => (
    <MyMessages message={message.messages} />
  ))

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }
  return (
    <div className={cssClass.dialogs}>
      <div className={cssClass.dialogsItems + " " + cssClass.avatar}>
        {dialogElement}
      </div>
      <div className={cssClass.messages}>{messageElements}</div>
      <div>
        <h3>New message</h3>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
)

export default Dialogs
