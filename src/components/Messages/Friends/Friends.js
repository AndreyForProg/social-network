import React from 'react'
import {NavLink} from 'react-router-dom'
import ava from '../../../assetc/ava.png'



const Friends = (props) => {
  return (
    <div className="user">
      <img src={ava} alt="avatar"/>
      <NavLink to={'/Messages/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default Friends