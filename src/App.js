import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/Navbar/NavBar'
import ContentContainer from './components/Content/ContentContainer'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='wrapper'>
          <NavBar />
          <div className="app-content">
            <Route path="/Content" render={() => <ContentContainer />}/>

            <Route path="/Messages" render={() => <MessagesContainer />}/>

            <Route path="/Users" render = {() => <UsersContainer />}/>

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