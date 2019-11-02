import React from 'react'
import s from './posts.module.css'

const Posts = (props) => {
  return (
      <div>
        <h3>My posts</h3>
        <div className={s.myPost}>
          <textarea ref={props.newPostElement} className={s.writePost} placeholder="your news..." value={props.changePostText} onChange={props.uppdatePostText}/>
          <button className={s.sendPost} onClick={props.addPost}>Send</button>
        </div>
        {props.postDataElements}
      </div>
  )
}

export default Posts