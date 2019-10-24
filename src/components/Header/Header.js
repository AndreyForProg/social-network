import React from 'react'
import s from './header.module.css'
import logo from '../../assetc/logo.png'


const Header = () => {
  return (
  <header className={s.header}>
    <div className={s.header_wrapper}>
      <img src={logo} alt="logo"/>
    </div>
  </header>
  )
}

export default Header