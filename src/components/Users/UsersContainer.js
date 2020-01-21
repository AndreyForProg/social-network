import React from 'react'
import { connect } from 'react-redux'
import Users from './Users/Users'
import {followActionCreater, unFollowActionCreater, setUsersAC} from '../../redux/usersPageReducer'

let mapStateToProps = (state) => {
  return ({
    users: state.usersPageReducer.users
  })
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      return dispatch(followActionCreater(id))
    },
    unfollow: (id) => {
      return dispatch(unFollowActionCreater(id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)