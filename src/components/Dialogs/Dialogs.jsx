import React from 'react'
import cssClass from './Dialogs.module.css'
import MyMessages from "./Message/MyMessages";
import Dialog from "./Dialogs/Dialog";


const Dialogs = (props) => {

    let dialogData = [props.dialogs]
    let messageData = [props.messages]

    let dialogElement = dialogData.map(dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
    let messageElements = messageData.map(messages => <MyMessages message={messages.message}/>)

    return (
        <div className={cssClass.dialogs}>
            <div className={cssClass.dialogsItems}>
                {dialogElement}
            </div>
            <div className={cssClass.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;