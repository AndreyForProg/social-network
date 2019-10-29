import React from 'react'
import s from './posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
  let postDataElements = props.posts.map( post => <Post message={post.message} likes={post.likes}/> )

  return (
      <div>
        <h3>My posts</h3>
        <div className={s.myPost}>
          <textarea type="text" className={s.writePost} placeholder="your news..."/>
          <button className={s.sendPost}>Send</button>
        </div>
        {postDataElements}
      </div>
  )
}

export default Posts