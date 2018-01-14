import React from 'react'
import {withRouter} from 'react-router-dom'
import UrlPattern from 'url-pattern'
import * as BlogActions from '../../actions/blog'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'
import PreBar from '../common/pre-bar'
import '../../constant/css/css.css'
import {Avatar, Chip} from 'material-ui'
import * as Color from '../../constant/color'

const contentStyle = {
  width: '80%',
  margin: '0 auto'
}
class BlogDetail extends React.Component {
  componentDidMount () {
    const pattern = new UrlPattern('/blog/:id')
    const urlParams = pattern.match(this.props.location.pathname) || {}
    this.props.getBlog(urlParams.id)
  }

  render () {
    const blog = this.props.blog
    const tags = blog.tags.map((tag) =>
      <Chip key={tag.id} style={{margin: '5px 10px 0 0', color: 'white', fontWeight: 'bold'}}
        avatar={<Avatar
          src={tag.headImg} />}
        label={tag.content}
          />
      )

    return <div>
      <PreBar />
      <div style={contentStyle} align='center'>
        <h1 style={{fontSize: 40}}>{blog.title}</h1>
        <p style={{float: 'right', color: Color.GREP,fontWeight:'bold'}}>{new Date(blog.time).toDateString()}</p>
        <p>{tags}</p>
        <ReactMarkdown source={blog.content} />
      </div>
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
