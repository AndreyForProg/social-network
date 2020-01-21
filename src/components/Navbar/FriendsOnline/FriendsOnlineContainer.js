import React from 'react'
import ava from '../../../assetc/ava.png'
import s from './friendsOnline.module.css'
import FriendsOnline from './FriendsOnline'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    friend: state.friendOnline.map( (friend) => {
      return (
        <div className={s.friend}>
          <img src={ava} alt="avatar"/>
          <div>{friend.name}</div>
        </div>
      )
    })
  }
}

let mapDispatchToProps = () => {}

const FriendsOnlineContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsOnline)

export default FriendsOnlineContainer