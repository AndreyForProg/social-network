import React from 'react'
import s from './user.module.css'
import DownloadImg from '../../details/downloadImg/DownloadImg'

const User = (props) => {
  if (!props.content) {
    return <DownloadImg download={true}/>
  }
  return (
    <div className={s.user} >
      <div className={s.logo_about}>
        <div>
        <div className={s.contacts}>
          contacts:
          <span>{props.content.contacts.facebook} </span>
          <span>{props.content.contacts.website} </span>
          <span>{props.content.contacts.vk} </span>
          <span>{props.content.contacts.twitter} </span>
          <span>{props.content.contacts.instagram} </span>
          <span>{props.content.contacts.youtube} </span>
          <span>{props.content.contacts.github} </span>
          <span>{props.content.contacts.mainLink}</span>
        </div>
        <img src={props.content.photos.small} alt=""/>
          <h3>{props.content.fullName}</h3>
          <p>{props.content.aboutMe}</p>
        </div>
      </div>
    </div>
  )
}

export default User