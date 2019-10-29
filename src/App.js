import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/Navbar/NavBar'
import Content from './components/Content/Content'
import Messages from './components/Messages/Messages'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom'

let friendsData = [
  {
    id: '1',
    name: 'Sanya'
  },
  {
    id: '2',
    name: 'Anton'
  },
  {
    id: '3',
    name: 'Ira'
  },
  {
    id: '4',
    name: 'Dasha'
  },
  {
    id: '5',
    name: 'Igor'
  }
]


let dialogData = [
  {
    id: '1',
    message: '-hi!'
  },
  {
    id: '2',
    message: '-how are you?'
  },
  {
    id: '3',
    message: '-soso'
  },
  {
    id: '4',
    message: '-it/s my'
  }
]

let postData = [
  {
    id: '1',
    likes: '3',
    message: 'Hi, how are you'
  },
  {
    id: '2',
    likes: '5',
    message: 'Hi, how your famely'
  },
  {
    id: '3',
    likes: '12',
    message: 'super'
  }
]

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='wrapper'>
          <NavBar />
          <div className="app-content">
            <Route path="/Content" render={() => <Content posts={postData}/>}/>
            <Route path="/Messages" render={() => <Messages friends={friendsData} dialogs={dialogData}/>}/>
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