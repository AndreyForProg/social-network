import React from 'react'
import Friends from './Friends/Friends'
import Dialog from './Dialog/Dialog'
import Messages from './Messages'
import { sendMessageCreater, changeMessageCreater } from '../../redux/messagePageReducer'

const MessagesContainer = (props) => {
  let frendsDataElements = props.friends.map( friend => <Friends name={friend.name} id={friend.id}/>)
  let dialogDataElements = props.dialogs.friendsMessages.map( dialog => <Dialog message={dialog.message}/>)

  let newMessage = React.createRef()

  let sendMessage = () => {
    props.dispatch(sendMessageCreater())
  }

  let chengeMessageText = () => {
    let text = newMessage.current.value
    props.dispatch(changeMessageCreater(text))
  }

  let chengeMessageTextValue = props.dialogs.chengeMessageText

  return (
    <Messages frendsDataElements={frendsDataElements} dialogDataElements={dialogDataElements} chengeMessageText={chengeMessageText} chengeMessageTextValue={chengeMessageTextValue} sendMessage={sendMessage} newMessage={newMessage}/>
  )
}

export default MessagesContainer