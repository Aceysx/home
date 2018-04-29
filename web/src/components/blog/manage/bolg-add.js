import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogActions from '../../../actions/blog'
import { Checkbox } from "material-ui/es/index";
import { FormControlLabel } from "material-ui/es/Form/index";

class BlogAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
      headImg: '',
      tags: []
    }
  }

  componentDidMount() {
    this.props.getTags()
  }
  update = (id) => {
    this.props.history.push(`/manage/blogs/${id}`)
  }

  handleChange(event) {
    const { checked, value } = event.target
    let tags = this.state.tags
    if (checked) {
      tags.push(value)
    } else {
      tags = tags.filter(tag => tag !== value)
    }
    console.log(tags)
    this.setState({ tags })
  };

  submit() {
    let tags = this.state.tags
    tags = tags.map(tag => ({ 'id': tag }))
    this.setState({ tags }, () => this.props.addBlog(this.state))
  }
  render() {
    const tags = this.props.tags.map(tag => <FormControlLabel
      control={
        <Checkbox
          value={tag.id}
          onChange={this.handleChange.bind(this)}
        />
      }
      label={tag.content}
    />)
    return <div>
      {tags}
      <p>title:<input type='text' onChange={e => this.setState({ title: e.target.value })} /></p>
      <p>content:<textarea type='text' onChange={e => this.setState({ content: e.target.value })} /></p>
      <p>headImg:<input type='text' onChange={e => this.setState({ headImg: e.target.value })} /></p>
      <button onClick={this.submit.bind(this)}>提交</button>
      <hr />

      <h2>修改</h2>
      {this.props.tags.map(item => {
        return <div>
          <p>{item.content}</p>
          {item.id ? item.blogs.map(blog => {
            return <div>{blog.title} | <button onClick={this.update.bind(this, blog.id)}>update</button></div>
          }) : ''}
          <hr />
        </div>
      })}
    </div>
  }
}
const mapStateToProps = state => ({
  tags: state.tags,
  blogs: state.blogs
})
const mapDispatchToProps = dispatch => ({
  addBlog: (blog) => dispatch(BlogActions.addBlog(blog)),
  getTags: () => dispatch(BlogActions.getTags())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogAdd))
