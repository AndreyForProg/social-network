import React from 'react'
import s from './user.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: '1',
        followed: true,
        name: 'Dmitriy K.',
        country: 'Belarus',
        city: 'Minsk',
        status: 'I am looking for a job right now...',
        ava: 'https://upload.wikimedia.org/wikipedia/ru/e/ef/Naruto_Uzumaki_%283_in_1%29.png'
      },
      {
        id: '2',
        followed: false,
        name: 'Andrey',
        country: 'Belarus',
        city: 'Minsk',
        status: 'I am looking for a job right now...',
        ava: ''
      },
      {
        id: '3',
        followed: true,
        name: 'Sergey',
        country: 'Ukraine',
        city: 'Kiev',
        status: 'I am looking for a job right now...',
        ava: ''
      }
    ])
  }

  return (
    <div className={s.users}>
      <h3>Users</h3>
      {props.users.map(u =>
        <div className={s.user} key={u.id}>
        <div className={s.avatar}>
          <img src={u.ava} alt=""/>
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
          <div className={s.location}>
            <div className={s.country}>
              {u.country}
            </div>
            <div className={s.city}>
              {u.city}
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