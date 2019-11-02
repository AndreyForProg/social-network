import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/Navbar/NavBar'
import Content from './components/Content/Content'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom'
import MessagesContainer from './components/Messages/MessagesContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='wrapper'>
          <NavBar friendsOnline={props.state.friendOnline}/>
          <div className="app-content">
            <Route path="/Content" render={() => <Content posts={props.state.content} dispatch={props.dispatch}/>}/>

            <Route path="/Messages" render={() => <MessagesContainer friends={props.state.messages.friendsData} dialogs={props.state.messages.dialogData} dispatch={props.dispatch}/>}/>

            <Route path="/Music" component={Music}/>
            <Route path="/News" component={News}/>
            <Route path="/Settings" component={Settings}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App