import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogActions from '../../../actions/blog'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../common/markdown/code-block'

class BlogUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      blog: {},
      preview: true
    }
  }

  componentDidMount(callBack) {
    const id = this.props.match.params.id
    this.props.getBlogById(id, (blog) => {
      this.setState({ blog })
    })
  }
  onChange = (e) => {
    console.log(this.state.blog)
    let blog = this.state.blog
    blog.content = e.target.value
    this.setState({ blog })
  }
  submit = () => {
    this.props.updateBlog(this.state.blog)
  }
  render() {
    const blog = this.state.blog
    return <div>
      <h2>修改</h2>
      <button onClick={() => this.setState({ preview: !this.state.preview })} >预览 / 退出预览</button>
      <button onClick={this.submit}>save</button>
      <h3>{blog.title}</h3>
      {this.state.preview ?
      <div className='markdown'>
        <ReactMarkdown  source={blog.content} escapeHtml={false}
          renderers={{ code: CodeBlock }} />
          </div>
        :
        <textarea cols='200' rows='200'
          onChange={this.onChange}
          value={blog.content}
          style={{ fontSize: 14, padding: 5 }} />
      }

    </div>
  }
}
const mapStateToProps = state => ({
  blog: state.blog
})
const mapDispatchToProps = dispatch => ({
  getBlogById: (id, callBack) => dispatch(BlogActions.getBlog(id, callBack)),
  updateBlog: (blog) => dispatch(BlogActions.updateBlog(blog))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogUpdate))
