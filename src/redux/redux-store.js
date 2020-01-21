import {createStore, combineReducers} from 'redux'
import messagePageReducer from './messagePageReducer'
import contentPostsReducer from './contentPageReducer'
import friendsOnlineReducer from './friendsOnlineReducer'
import usersPageReducer from './usersPageReducer'

const reducers = combineReducers({
  content: contentPostsReducer,
  messages: messagePageReducer,
  friendOnline: friendsOnlineReducer,
  usersPageReducer: usersPageReducer
})

const store = createStore(reducers)
window.store = store
export default store