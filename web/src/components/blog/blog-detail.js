import React from 'react'
import {withRouter} from 'react-router-dom'
import UrlPattern from 'url-pattern'
import * as BlogActions from '../../actions/blog'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'
import PreBar from '../common/pre-bar'
import Paper from 'material-ui/es/Paper/Paper'
import '../../constant/css/blog/blog-detail.css'
import LinearProgress from 'material-ui/es/Progress/LinearProgress'
import Tag from '../common/blog/Tag'
import CodeBlock from '../common/markdown/code-block'

class BlogDetail extends React.Component {
  componentDidMount () {
    const pattern = new UrlPattern('/blogs/:id')
    const urlParams = pattern.match(this.props.location.pathname) || {}
    this.props.getBlog(urlParams.id)
  }

  render () {
    const blog = this.props.blog
    const tags = blog.tags.map((tag, index) => <Tag key={index} {...tag} />)

    return <div className='bg-color'>
      <PreBar />

      <Paper className='bg-color-white blog-content'>
        <h1 style={{fontSize: 40}}>{blog.title}</h1>
        <p className='blog-detail-time'>{new Date(blog.time).toDateString()}</p>
        <p>{tags}</p>
        <p><LinearProgress mode='buffer' value={100} /></p>
        <ReactMarkdown source={blog.content} escapeHtml={false}
          renderers={{code: CodeBlock}} />
      </Paper>
    </div>
  }
}

const mapStateToProps = state => ({
  blog: state.blogDetail
})
const mapDispatchToProps = dispatch => ({
  getBlog: (id) => dispatch(BlogActions.getBlog(id))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogDetail))
