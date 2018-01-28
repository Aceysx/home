import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as BlogActions from '../../../actions/blog'

class BlogAdd extends React.Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      headImg: ''
    }
  }

  submit () {
    this.props.addBlog(this.state)
  }
  render () {
    return <div>
      <p>title:<input type='text' onChange={e => this.setState({title: e.target.value})} /></p>
      <p>content:<input type='text' onChange={e => this.setState({content: e.target.value})} /></p>
      <p>headImg:<input type='text' onChange={e => this.setState({headImg: e.target.value})} /></p>
      <button onClick={this.submit.bind(this)}>提交</button>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  addBlog: (blog) => dispatch(BlogActions.addBlog(blog))
})

export default withRouter(connect(null, mapDispatchToProps)(BlogAdd))
