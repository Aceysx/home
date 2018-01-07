import React from 'react'
import {withRouter} from 'react-router-dom'
import UrlPattern from 'url-pattern'
import * as BlogActions from '../../actions/blog'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'
const styles = {
  img: {
    width: '200'
  },
  color: 'red'
}
class BlogDetail extends React.Component {
  componentDidMount () {
    const pattern = new UrlPattern('/blog/:id')
    const urlParams = pattern.match(this.props.location.pathname) || {}
    this.props.getBlog(urlParams.id)
  }

  render () {
    const blog = this.props.blog
    const content = blog.content
    return <ReactMarkdown source={content} className={styles} />
  }
}
const mapStateToProps = state => ({
  blog: state.blogDetail
})
const mapDispatchToProps = dispatch => ({
  getBlog: (id) => dispatch(BlogActions.getBlog(id))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogDetail))
