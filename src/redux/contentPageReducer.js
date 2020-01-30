const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_CONTENT = 'SET_CONTENT'

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
    changePostText: '',
    content: null
}

const contentPostsReducer = ( state = initState, action ) => {

  switch ( action.type ) {
    case ADD_POST: {
      return {
        ...state,
        changePostText: '',
        posts: [...state.posts, {id: 4, likes: 4, message: state.changePostText}]
      }
    }

    case CHANGE_POST_TEXT: {
      return {
        ...state,
        changePostText: action.text
      }
    }

    case SET_CONTENT: {
      return {
        ...state, content: action.content
      }
    }

    default: return state
  }
}

export const addPostCreater = () => ({
  type: ADD_POST
})

export const setContent = (content) => ({
  type: SET_CONTENT,
  content
})

export const writePostCreater = (text) => ({
  type: CHANGE_POST_TEXT,
  text: text
})

export default contentPostsReducer