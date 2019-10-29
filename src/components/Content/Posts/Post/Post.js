import React from 'react'
import s from './post.module.css'
import ava from '../../../../assetc/ava.png'


const Post = (props) => {
  return (
      <div className={s.post}>
        <div className={s.message}>
          <img src={ava} alt="avatar"/>
          <p>{props.message}</p>
        </div>

        <div>
          <button>like<span> {props.likes}</span></button>
        </div>
      </div>
  )
}

export default Post