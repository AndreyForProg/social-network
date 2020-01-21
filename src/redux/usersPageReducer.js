const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'

const initState = {
  users: [

  ]
}

const usersPageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
    return {
      ...state,
      users: [...state.users, ...action.users]
    }

    case FOLLOW_USER:
    return {
      ...state,
      users: state.users.map(user => {
        if (user.id === action.id) {
          return {...user, followed: true}
        }
        return user
      })
    }

    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return {...user, followed: false}
          }
          return user
        })
    }

    default: {
      return state
    }
  }
}

export const followActionCreater = (userId) => ({
  type: FOLLOW_USER,
  id: userId
})

export const unFollowActionCreater = (userId) => ({
  id: userId,
  type: UNFOLLOW_USER
})

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users
})

export default usersPageReducer