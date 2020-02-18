import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {getAuthUserThunk} from '../../redux/authR'
import {API} from '../../api/api'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserThunk()
  }

  render () {
    return (
      <Header is_auth={this.props.is_auth} login={this.props.login} avatar={this.props.avatar}/>
    )
  }
}

let mapStateToProps = (state) => ({
  is_auth: state.authR.is_auth,
  id: state.authR.id,
  login: state.authR.login,
  avatar: state.authR.photo
})

export default connect(mapStateToProps, {getAuthUserThunk})(HeaderContainer)