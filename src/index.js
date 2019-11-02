import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'

let callSubscriber = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root')
  )
}

callSubscriber(store.getState())
store.subscribe( () => {
  let state = store.getState()
  callSubscriber(state)
})