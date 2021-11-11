import React from 'react'
import cssClass from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return <div className={cssClass.messages}>{props.message}</div>
}

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={cssClass.dialogsItems + ' ' + cssClass.active}>
            <NavLink to={path} activeClassName={cssClass.activeLink}>{props.name}</NavLink>
        </div>
    )
}

let dialogs = [{id: 1, name: "Nick"}, {id: 2, name: "Uliana"}]
let messages = [{id: 1, message: "Kak dela"}, {id: 2, message: "4to delaew"}]

let dialogElement = dialogs.map( dialogs => <Dialog id={dialogs.id} name={dialogs.name}/>)
let messageElements = messages.map( messages => <Message message={messages.message}/>)

const Dialogs = (props) => {
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