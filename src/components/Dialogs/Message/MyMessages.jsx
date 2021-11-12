import React from 'react'
import cssClass from './Messages.module.css'

const Message = (props) => {
    return <div className={cssClass.messages}>{props.message}</div>
}

export default Message;