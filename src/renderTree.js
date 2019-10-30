import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {sendMessage, changePostText, chengeMessageText,addPost} from './redux/staste'

export let renderTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} sendMessage={sendMessage} changePostText={changePostText} chengeMessageText={chengeMessageText}/>,
    document.getElementById('root')
  )
}