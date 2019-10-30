import React from 'react'
import s from './posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
  let postDataElements = props.posts.posts.map( post => <Post message={post.message} likes={post.likes}/> )
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }

  let uppdatePostText = () => {
    let text = newPostElement.current.value
    props.changePostText(text)
  }

  return (
      <div>
        <h3>My posts</h3>
        <div className={s.myPost}>
          <textarea ref={newPostElement} className={s.writePost} placeholder="your news..." value={props.posts.changePostText} onChange={uppdatePostText}/>
          <button className={s.sendPost} onClick={addPost}>Send</button>
        </div>
        {postDataElements}
      </div>
  )
}

export default Posts