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

let dialogData = [{id: 1, name: "Nick"}, {id: 2, name: "Uliana"}]
let messageData = [{id: 1, message: "Kak dela"}, {id: 2, message: "4to delaew"}]

const Dialogs = (props) => {
    return (
        <div className={cssClass.dialogs}>
            <div className={cssClass.dialogsItems}>
                <Dialog id={dialogData[0].id} name={dialogData[0].name}/>
                <Dialog id={dialogData[1].id} name={dialogData[1].name}/>
            </div>
            <div className={cssClass.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;