import React from 'react'
import Post from './Post/Post'
import Posts from './Posts'
import {addPostCreater, writePostCreater} from '../../../redux/contentPageReducer'

const PostsContainer = (props) => {
  let postDataElements = props.posts.posts.map( post => <Post message={post.message} likes={post.likes}/> )

  let addPost = () => {
    props.dispatch(addPostCreater())
  }

  let uppdatePostText = () => {
    let text = newPostElement.current.value
    props.dispatch(writePostCreater(text))
  }

  let changePostText = props.posts.changePostText
  let postDataElement = props.postDataElement
  let newPostElement = React.createRef()

  return (
    <Posts addPost={addPost} postDataElement={postDataElement} uppdatePostText={uppdatePostText} changePostText={changePostText} postDataElements={postDataElements} newPostElement={newPostElement}/>
  )
}

export default PostsContainer