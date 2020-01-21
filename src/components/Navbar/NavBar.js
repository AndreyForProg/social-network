import React from 'react'
import s from './navbar.module.css'
import {NavLink} from 'react-router-dom'
import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer'

const NavBar = (props) => {
  return (
    <div className={s.navbar}>
      <div>
        <NavLink to='/Content'>Profile</NavLink>
      </div>

      <div>
        <NavLink to='/Messages'>Messages</NavLink>
      </div>

      <div>
        <NavLink to='/Users'>Users</NavLink>
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

      <div className={s.friends_online}>
        <div>ОНЛАЙН</div>
        <FriendsOnlineContainer friendsOnline={props.friendsOnline}/>
      </div>
    </div>
  );
}

export default NavBar