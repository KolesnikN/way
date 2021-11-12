import React from 'react'
import cssClass from './Dialogs.module.css'
import MyMessages from "./Message/MyMessages";
import Dialog from "./Dialogs/Dialog";



const Dialogs = (props) => {
    let dialogs = [{id: 1, name: "Nick"}, {id: 2, name: "Uliana"}]
    let messages = [{id: 1, message: "Kak dela"}, {id: 2, message: "4to delaew"}]

    let dialogElement = dialogs.map( dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
    let messageElements = messages.map( messages => <MyMessages message={messages.message}/>)

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