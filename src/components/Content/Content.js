import React from 'react'
import s from './content.module.css'
import User from './User/User'
import PostsContainer from './Posts/PostsContainer'

const Content = (props) => {

  return (
    <div className={s.content} >
      <User content={props.content}/>
      <PostsContainer />
    </div>
  )
}

export default Content