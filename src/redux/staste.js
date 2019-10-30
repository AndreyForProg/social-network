import {renderTree} from '../renderTree'


let state = {
  messages: {
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

    dialogData: [
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
    ]
  },
  postData: [
    {
      id: 1,
      likes: 3,
      message: 'Hi, how are you'
    },
    {
      id: 2,
      likes: 5,
      message: 'Hi, how your famely'
    },
    {
      id: 3,
      likes: 12,
      message: 'super'
    }
  ],
  friendsOnline: [
    {
      id: '1',
      ava: 'path',
      name: 'Vova'
    },
    {
      id: '2',
      ava: 'path',
      name: 'Igor'
    },
    {
      id: '3',
      ava: 'path',
      name: 'Ira'
    },
    {
      id: '4',
      ava: 'path',
      name: 'Saha'
    },
    {
      id: '5',
      ava: 'path',
      name: 'Sergey'
    },
    {
      id: '6',
      ava: 'path',
      name: 'Denis'
    }
  ],
}

export let addPost = (message) => {
  let newPost = {
    id: 4,
    likes: 0,
    message: message
  }
  state.postData.push(newPost)
  renderTree(state)
}

export let sendMessage = (message) => {
  let newMessage = {
    id: 4,
    message: message
  }
  state.messages.dialogData.push(newMessage)
  renderTree(state)
}

export default state