import {createStore, combineReducers} from 'redux'
import messagePageReducer from './messagePageReducer'
import contentPostsReducer from './contentPageReducer'
import friendsOnlineReducer from './friendsOnlineReducer'

const reducers = combineReducers({
  content: contentPostsReducer,
  messages: messagePageReducer,
  friendOnline: friendsOnlineReducer
})

const store = createStore(reducers)

export default store