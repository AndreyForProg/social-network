const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const ACTIVE_PAGE = 'ACTIVE_PAGE'
const IS_DOWNLOADING = 'IS_DOWNLOADING'

const initState = {
  users: [],
  countUsersOnPage: 20,
  activeP: 1,
  maxUsers: 1,
  isDownload: false
}

const usersPageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      let stateCopy = {...state}
      stateCopy.users = [...action.users]
      stateCopy.users.photos = {...action.users.photos}
      stateCopy.maxUsers = action.totalCount
      return stateCopy

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

    case ACTIVE_PAGE:
      return {
        ...state,
        activeP: action.activePage
    }

    case IS_DOWNLOADING:
      return {
        ...state,
        isDownload: action.download
    }

    default: {
      return state
    }
  }
}

export const follow = (userId) => ({
  type: FOLLOW_USER,
  id: userId
})

export const unFollow = (userId) => ({
  id: userId,
  type: UNFOLLOW_USER
})

export const activePageClick = (page) => ({
  type: ACTIVE_PAGE,
  activePage: page
})

export const isDownload = (download) => ({
  type: IS_DOWNLOADING,
  download
})

export const setUsers = (users, totalCount) => ({
  type: SET_USERS,
  users: users,
  totalCount
})

export default usersPageReducer