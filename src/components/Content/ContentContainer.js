import React from 'react'
import Content from './Content'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {contentPage, getStatus, updateStatusThunk} from '../../redux/contentPageReducer'
// import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'

class ContentContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId
    if (!id) {
      id = 5733
    }
    this.props.contentPage(id)
    this.props.getStatus(id)
  }

  render() {
    return (
        <Content content={this.props.content} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
      )
  }
}

let mapStateToProps = (state) => ({
  content: state.content.content,
  status: state.content.status
})

export default compose(
  connect(mapStateToProps, {contentPage, getStatus, updateStatusThunk}),
  withRouter
  // WithAuthRedirect
)(ContentContainer)