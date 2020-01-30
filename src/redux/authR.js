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
        ...state, ...action.data, is_auth: true
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

export default authR