import React from 'react';
import cssClass from './Dialogs.module.css';
import DialogItem from "./Dialogs/DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import Dialog from './Dialogs/Dialog';
import MyMessages from "./Message/MyMessages"

const Dialogs = (props) => {

    let state = props.dialogPage;

     let dialogElement = state.dialogs.map((dialog) => (
       <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
     ))
     let messageElements = state.dialogs.map((message) => (
       <MyMessages message={message.messages} />
     ))
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} /> ;

    return (
      <div className={cssClass.dialogs}>
        <div className={cssClass.dialogsItems + " " + cssClass.avatar}>
          {dialogElement}
        </div>
        <div className={cssClass.messages}>
          <div>{messageElements}</div>
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    )
}

export default Dialogs;