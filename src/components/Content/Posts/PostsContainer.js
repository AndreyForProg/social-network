import React from 'react'
import Post from './Post/Post'
import Posts from './Posts'
import { connect } from 'react-redux'
import {addPostCreater, writePostCreater} from '../../../redux/contentPageReducer'

let mapStateToProps = (state) => {
  return {
    postDataElements: state.content.posts.map( post => <Post message={post.message} likes={post.likes}/> ),
    changePostText: state.content.changePostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreater())
    },
    uppdatePostText: (e) => {
      let text = e.target.value
      dispatch(writePostCreater(text))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer