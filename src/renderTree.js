import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addPost} from './redux/staste'
import {sendMessage} from './redux/staste'

export let renderTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} sendMessage={sendMessage}/>,
    document.getElementById('root')
  )
}