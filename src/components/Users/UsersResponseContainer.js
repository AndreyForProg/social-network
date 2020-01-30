import React from 'react'
import Users from './Users/Users'
import DownloadImg from '../details/downloadImg/DownloadImg'
import * as axios from 'axios'

class UsersResponseContainer extends React.Component {

  componentDidMount() {
    this.props.isDownload(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersOnPage}&&page=${this.props.activeP}`)
    .then(response => {
      this.props.setUsers(response.data.items, response.data.totalCount)
      this.props.isDownload(false)
  })
  }

  activPaginationPage = (n) => {
    this.props.isDownload(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&&count=${this.props.countUsersOnPage}`)
    .then(response => {
      this.props.setUsers(response.data.items, response.data.totalCount)
      this.props.isDownload(false)
    })
  }

  paginationArr() {
    let arrPag = []
    for(let i = 0; i <= Math.ceil(this.props.pagination); i++) {
      arrPag[i] = i + 1
    }
    return arrPag
  }

  render () {
    return <>
      <DownloadImg download={this.props.isDownloading}/>
      <Users arrPag={this.paginationArr()}
            activePageClick = {this.props.activePageClick}
            activPaginationPage={this.activPaginationPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            activeP={this.props.activeP}/>
    </>
  }
}

export default UsersResponseContainer