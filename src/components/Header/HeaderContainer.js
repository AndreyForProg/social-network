import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {setAuthUser} from '../../redux/authR'

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(photo => {
          console.log(photo)
          this.props.setAuthUser(id, email, login, photo.data.photos.small)
        })
      }
    })
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

export default connect(mapStateToProps, {setAuthUser})(HeaderContainer)