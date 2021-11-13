import React from 'react'
import cssClass from './Dialogs.module.css'
import MyMessages from "./Message/MyMessages";
import Dialog from "./Dialogs/Dialog";


const Dialogs = (props) => {

    let dialogElement = props.state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>)
    let messageElements = props.state.dialogs.map(message => <MyMessages message={message.messages}/>)


    return (
        <div className={cssClass.avatar}>
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