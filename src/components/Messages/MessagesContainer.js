import React from 'react'
import Friends from './Friends/Friends'
import Dialog from './Dialog/Dialog'
import Messages from './Messages'
import { connect } from 'react-redux'
import { sendMessageCreater, changeMessageCreater } from '../../redux/messagePageReducer'

let mapStateToProps = (state) => {
  return {
    frendsDataElements: state.messages.friendsData.map( friend => <Friends name={friend.name} id={friend.id}/>),
    dialogDataElements: state.messages.dialogData.friendsMessages.map( dialog => <Dialog message={dialog.message}/>),
    chengeMessageTextValue: state.messages.dialogData.chengeMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreater())
    },
    chengeMessageText: (e) => {
      let text = e.target.value
      dispatch(changeMessageCreater(text))
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer