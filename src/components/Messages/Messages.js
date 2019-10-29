import React from 'react'
import s from './messages.module.css'
import Friends from './Friends/Friends'
import Dialog from './Dialog/Dialog'

const Messages = (props) => {
  let frendsDataElements = props.friends.map( friend => <Friends name={friend.name} id={friend.id}/>)
  let dialogDataElements = props.dialogs.map( dialog => <Dialog message={dialog.message}/> )

  return (
    <div className={s.messages}>
      <div className={s.friends}>
        {frendsDataElements}
      </div>

      <div className={s.dialogs}>
        {dialogDataElements}
      </div>
    </div>
  )
}

export default Messages