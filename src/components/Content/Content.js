import React from 'react'
import s from './content.module.css'
import Posts from './Posts/Posts'
import User from './User/User'

const Content = (props) => {
  return (
    <div className={s.content} >
      <User />
      <Posts posts={props.posts} addPost={props.addPost} changePostText={props.changePostText}/>
    </div>
  )
}

export default Content