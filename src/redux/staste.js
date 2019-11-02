import messagePageReducer from './messagePageReducer'
import contentPostsReducer from './contentPageReducer'
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
    },
    postData: {
      posts: [
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
      changePostText: ''
    },
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
    ]
  },
  _callSubscriber() {
    console.log('state shanged')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    contentPostsReducer( this._state.postData, action )
    messagePageReducer( this._state.messages.dialogData, action )
    this._callSubscriber(this._state)
  }
}

export default store