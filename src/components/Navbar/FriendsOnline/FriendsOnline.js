import React from 'react'
import ava from '../../../assetc/ava.png'
import s from './friendsOnline.module.css'

const FriendsOnline = (props) => {
  let friend = props.friendsOnline.map( (friend) => {
    return (
      <div className={s.friend}>
        <img src={ava} alt="avatar"/>
        <div>{friend.name}</div>
      </div>
    )
  })

  return (
      <div className={s.friends}>
        {friend}
      </div>
    )
}

export default FriendsOnline