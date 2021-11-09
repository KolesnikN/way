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

const Dialogs = (props) => {
    return (
        <div className={cssClass.dialogs}>
            <div className={cssClass.dialogsItems}>
                <Dialog name="Nick" id="1"/>
                <Dialog name="Uliana" id="2"/>
                <Dialog name="Serega" id="3"/>
                <Dialog name="Dima" id="4"/>
            </div>
            <div className={cssClass.messages}>
                <Message message="Kak dela"/>
                <Message message="4to delaew"/>
                <Message message="When we can meet?"/>
                <Message message="Say him NO"/>
            </div>
        </div>
    );
}

export default Dialogs;