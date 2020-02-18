import {API} from '../api/api'

const SET_AUTH_USER = 'SET_AUTH_USER'

const initState = {
  id: null,
  email: null,
  login: null,
  photo: null,
  is_auth: false
}

const authR = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        id: action.data.id,
        email: action.data.email,
        login: action.data.login,
        photo: action.data.photo,
        is_auth: true
      }
    default: {
      return state
    }
  }
}

export const setAuthUser = (id, email, login, photo) => ({
  type: SET_AUTH_USER,
  data: {id, email, login, photo}
})

export const getAuthUserThunk = () => {
  return (dispatch) => {
    API.authMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        API.contentPage(id)
        .then(photo => {
          dispatch(setAuthUser(id, email, login, photo.data.photos.small))
        })
      }
    })
  }
}

export default authR