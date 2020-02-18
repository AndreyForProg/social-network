import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateForAuthRedirect = (state) => ({
  isAuth: state.authR.is_auth
})

export const WithAuthRedirect = (Component) => {
  class RediretComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/Login'} />
      return <Component {...this.props} />
    }
  }

  let AuthRedirectComponent = connect(mapStateForAuthRedirect)(RediretComponent)

  return AuthRedirectComponent
}