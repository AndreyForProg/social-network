import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import NavBar from './components/Navbar/NavBar'
import ContentContainer from './components/Content/ContentContainer'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <div className='wrapper'>
          <NavBar />
          <div className="app-content">
            <Route path="/Content/:userId?" render={() => <ContentContainer />}/>

            <Route path="/Messages" render={() => <MessagesContainer />}/>

            <Route path="/Users" render = {() => <UsersContainer />}/>
            <Route path="/Login" render = {() => <Login />}/>

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