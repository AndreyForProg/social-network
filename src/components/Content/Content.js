import React from 'react'
import s from './content.module.css'
import User from './User/User'
import PostsContainer from './Posts/PostsContainer'

const Content = (props) => {
  return (
    <div className={s.content} >
      <User content={props.content} status={props.status} updateStatus={props.updateStatus}/>
      <PostsContainer />
    </div>
  )
}

export default Content