import React from 'react'
import {NavLink} from 'react-router-dom'



const Friends = (props) => {
  return (
    <div>
      <NavLink to={'/Messages/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default Friends