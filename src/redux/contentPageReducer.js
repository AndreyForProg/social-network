const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'

const initState = {
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
}

const contentPostsReducer = ( state=initState, action ) => {
  switch ( action.type ) {
    case ADD_POST:
      let newPost = {
        id: 4,
        likes: 0,
        message: state.changePostText
      }
      state.posts.push(newPost)
      state.changePostText = ''
      return state
    case CHANGE_POST_TEXT:
      state.changePostText = action.text
      return state
    default: return state
  }
}

export const addPostCreater = () => ({
  type: ADD_POST
})

export const writePostCreater = (text) => ({
  type: CHANGE_POST_TEXT,
  text: text
})

export default contentPostsReducer