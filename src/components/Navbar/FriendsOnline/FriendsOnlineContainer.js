import React from 'react'
import ava from '../../../assetc/ava.png'
import s from './friendsOnline.module.css'
import FriendsOnline from './FriendsOnline'

const FriendsOnlineContainer = (props) => {
  let friend = props.friendsOnline.map( (friend) => {
    return (
      <div className={s.friend}>
        <img src={ava} alt="avatar"/>
        <div>{friend.name}</div>
      </div>
    )
  })

  return (
      <FriendsOnline friend={friend}/>
    )
}

export default FriendsOnlineContainer