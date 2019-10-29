import React from 'react'
import s from './navbar.module.css'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className={s.navbar}>
      <div>
        <NavLink to='/Content'>Profile</NavLink>
      </div>

      <div>
        <NavLink to='/Messages'>Messages</NavLink>
      </div>

      <div>
        <NavLink to='/News'>News</NavLink>
      </div>

      <div>
        <NavLink to='/Music'>Music</NavLink>
      </div>

      <div>
        <NavLink to='/Settings'>Settings</NavLink>
      </div>
    </div>
  );
}

export default NavBar