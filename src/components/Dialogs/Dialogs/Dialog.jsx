import React from 'react'
import cssClass from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={cssClass.dialogsItems + ' ' + cssClass.activeLink}>
            <NavLink to={path} activeClassName={cssClass.activeLink}>
                <img src={props.avatar} alt="https://img.freepik.com/free-vector/404-error-with-character-error-design-template-website_114341-24.jpg?size=626&ext=jpg" />
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;