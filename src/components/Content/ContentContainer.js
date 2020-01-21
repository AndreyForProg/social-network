import React from 'react'
import s from './content.module.css'
import User from './User/User'
import PostsContainer from './Posts/PostsContainer'

const ContentContainer = () => {

  return (
    <div className={s.content} >
      <User />
      <PostsContainer />
    </div>
  )
}

export default ContentContainer