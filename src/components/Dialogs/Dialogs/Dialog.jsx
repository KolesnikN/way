import React from 'react'
import cssClass from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogsNames/' + props.id;
    return (
        <div className={cssClass.dialogsItems + ' ' + cssClass.activeLink}>
            <NavLink to={path} activeClassName={cssClass.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;