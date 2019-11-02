import React from 'react'
import s from './messages.module.css'

const Messages = (props) => {


  return (
    <div className={s.messages}>
      <div className={s.friends}>
        {props.frendsDataElements}
      </div>

      <div className={s.dialogs}>
        {props.dialogDataElements}
        <div>
          <textarea cols="40" rows="3" placeholder="write message" ref={props.newMessage} value={props.chengeMessageTextValue} onChange={props.chengeMessageText}></textarea>
          <br/>
          <button onClick={props.sendMessage}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Messages