const SEND_MESSAGE = 'SEND_MESSAGE'
const CHENGE_MESSAGE_TEXT = 'CHENGE_MESSAGE_TEXT'

const initState = {
  friendsData: [
    {
      id: '1',
      name: 'Sanya'
    },
    {
      id: '2',
      name: 'Anton'
    },
    {
      id: '3',
      name: 'Ira'
    },
    {
      id: '4',
      name: 'Dasha'
    },
    {
      id: '5',
      name: 'Igor'
    }
  ],
  dialogData: {
    friendsMessages: [
      {
        id: 1,
        message: '-hi!'
      },
      {
        id: 2,
        message: '-how are you?'
      },
      {
        id: 3,
        message: '-soso'
      },
      {
        id: 4,
        message: '-it/s my'
      },
      {
        id: 5,
        message: '-I love this job'
      }
    ],
    chengeMessageText: ''
  },
}

const messagePageReducer = (state = initState, action) => {
  switch ( action.type ) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.dialogData.chengeMessageText
      }
      state.dialogData.friendsMessages.push(newMessage)
      state.dialogData.chengeMessageText = ''
      return state
    }
    case CHENGE_MESSAGE_TEXT: {
      console.log(action.message)
      state.dialogData.chengeMessageText = action.message
      return state
    }
    default: {
      return state
    }
  }
}

export const sendMessageCreater = () => ({
  type: SEND_MESSAGE
})

export const changeMessageCreater = (text) => {
  console.log(text)
  return {
    type: CHENGE_MESSAGE_TEXT,
    message: text
  }
}

export default messagePageReducer