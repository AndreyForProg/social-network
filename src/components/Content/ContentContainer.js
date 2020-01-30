import React from 'react'
import * as axios from 'axios'
import Content from './Content'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setContent} from '../../redux/contentPageReducer'

class ContentContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId
    if (!id) {
      id = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    .then(response => {
      this.props.setContent(response.data)
    })
  }

  render() {
    return (
        <Content {...this.props} content={this.props.content} />
      )
  }
}

let mapStateToProps = (state) => ({
  content: state.content.content
})

let WithUrlDataContainerComponent = withRouter(ContentContainer)
export default connect(mapStateToProps, {setContent})(WithUrlDataContainerComponent)