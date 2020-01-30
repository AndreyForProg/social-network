import UsersResponseContainer from './UsersResponseContainer'
import { connect } from 'react-redux'
import {follow, unFollow, setUsers, activePageClick, isDownload} from '../../redux/usersPageReducer'

let mapStateToProps = (state) => {
  let pagination = state.usersPageReducer.maxUsers / state.usersPageReducer.countUsersOnPage
  return ({
    users: state.usersPageReducer.users,
    countUsersOnPage: state.usersPageReducer.countUsersOnPage,
    maxUsers: state.usersPageReducer.maxUsers,
    activeP: state.usersPageReducer.activeP,
    pagination,
    isDownloading: state.usersPageReducer.isDownload
  })
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, activePageClick, isDownload})(UsersResponseContainer)