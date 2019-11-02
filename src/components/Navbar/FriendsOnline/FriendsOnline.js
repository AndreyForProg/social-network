import React from 'react'
import ava from '../../../assetc/ava.png'
import s from './friendsOnline.module.css'

const FriendsOnline = (props) => {
  return (
      <div className={s.friends}>
        {props.friend}
      </div>
    )
}

export default FriendsOnline