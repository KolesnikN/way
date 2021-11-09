import React from 'react'
import cssClass from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={cssClass.dialogs}>
            <div className={cssClass.dialogsItems}>
                <div className={cssClass.dialogsItems + ' ' + cssClass.active}>
                    Nick
                </div>
                <div className={cssClass.dialogsItems}>
                    Uliana
                </div>
                <div className={cssClass.dialogsItems}>
                    Vova
                </div>
                <div className={cssClass.dialogsItems}>
                    Serega
                </div>
            </div>
            <div className={cssClass.messages}>
                <div className={cssClass.messages}>privet</div>
                <div className={cssClass.messages}>4e delaew</div>
                <div className={cssClass.messages}>a? a?</div>
                <div className={cssClass.messages}>Pos</div>
            </div>
        </div>
    )
}

export default Dialogs;