import React from 'react'
import s from './header.module.css'
import logo from '../../assetc/logo.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
  <header className={s.header}>
    <div className={s.header_wrapper}>
      <img src={logo} alt="logo"/>
      <div className={s.login}>
        {props.is_auth ? <span>{props.login}</span> : <NavLink to={'/login'}>Login</NavLink>}
        <img src={props.avatar} alt=""/>
      </div>
    </div>
  </header>
  )
}

export default Header