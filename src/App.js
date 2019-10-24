import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/Navbar/NavBar'
import Content from './components/Content/Content'

const App = () => {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        <NavBar />
        <Content />
      </div>
    </div>
  )
}

export default App