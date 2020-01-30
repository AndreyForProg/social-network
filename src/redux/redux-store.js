import {createStore, combineReducers} from 'redux'
import messagePageReducer from './messagePageReducer'
import contentPostsReducer from './contentPageReducer'
import friendsOnlineReducer from './friendsOnlineReducer'
import usersPageReducer from './usersPageReducer'
import authR from './authR'

const reducers = combineReducers({
  content: contentPostsReducer,
  messages: messagePageReducer,
  friendOnline: friendsOnlineReducer,
  usersPageReducer: usersPageReducer,
  authR: authR
})

const store = createStore(reducers)
window.store = store
export default store