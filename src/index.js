import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/staste'

let callSubscriber = (state) => {
  ReactDOM.render(
    <App state={state} addPost={store.addPost.bind(store)} sendMessage={store.sendMessage.bind(store)} changePostText={store.changePostText.bind(store)} chengeMessageText={store.chengeMessageText.bind(store)}/>,
    document.getElementById('root')
  )
}

callSubscriber(store.getState())
store.subscribe(callSubscriber)