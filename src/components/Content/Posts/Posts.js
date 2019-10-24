import React from 'react'
import s from './posts.module.css'
import Post from './Post/Post'


const Posts = () => {
  return (
      <div>
        My posts
        <div className={s.myPost}>
          <textarea type="text" className={s.writePost} placeholder="your news..."/>
          <button className={s.sendPost}>Send</button>
        </div>
        <Post message='Hi, how are you' count='3'/>
        <Post message='fine, ty' count='5'/>
      </div>
  )
}

export default Posts