import React from 'react'
import Users from './Users/Users'
import DownloadImg from '../details/downloadImg/DownloadImg'

class UsersResponseContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreater(this.props.countUsersOnPage, this.props.activeP)
  }

  activPaginationPage = (n) => {
    this.props.activPaginationPageThunkCreater(n, this.props.countUsersOnPage)
  }

  paginationArr() {
    let arrPag = []
    for(let i = 0; i < Math.ceil(this.props.pagination); i++) {
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
            unfollow={this.props.unFollow}
            users={this.props.users}
            isFollowing={this.props.isFollowing}
            isFollow={this.props.isFollow}
            followUser={this.props.followUserThunkCreater}
            unfollowUser={this.props.unfollowUserThunkCreater}
            activeP={this.props.activeP}/>
    </>
  }
}

export default UsersResponseContainer