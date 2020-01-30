import React from 'react'
import s from './user.module.css'
import {NavLink} from 'react-router-dom'
import ava from '../../../assetc/ava.png'

const Users = (props) => {

  return (
    <div className={s.users}>
      {props.arrPag.map(n =>
        <span onClick={() => {
          props.activePageClick(n)
          props.activPaginationPage(n)}} className={props.activeP === n && s.activePag}>{+n} </span>
      )}
      <h3>Users</h3>
      {props.users.map(u =>
        <div className={s.user} key={u.id}>
        <div className={s.avatar}>
        <NavLink to={'/Content/' + u.id}> {u.photos.small ? <img src={u.photos.small} alt=""/> : <img src={ava} alt=""/>}</NavLink>
          {u.followed
          ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
          : <button onClick={ () => {props.follow(u.id)} }>follow</button>}
        </div>
        <div className={s.content}>
          <div className={s.name_status}>
            <h5 className={s.name}>
              {u.name}
            </h5>
            <div className={s.status}>
              {u.status}
            </div>
          </div>
        </div>
      </div>
      )}
      <button>show more</button>
    </div>
  )
}

export default Users