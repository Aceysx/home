import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import BlogGeneral from './blog-general'
import * as BlogActions from '../../actions/blog'
import Header from '../common/blog/header'
import TagsList from './TagsList'

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      defaultTagId: 0
    }
  }
  componentDidMount() {
    this.props.getBlogGenerals()
    this.props.getTags()
  }
  switchTag = (defaultTagId) => {
    this.props.getBlogGeneralsByTagId(defaultTagId)
    this.setState({ defaultTagId })
  }
  render() {
    const blogGenerals = this.props.blogGenerals.map((blog, key) => <BlogGeneral key={key} blog={blog} />)

    return (
      <div className='bg-color'>
        <Header title='最新更新' />
        <div style={{ position: 'absolute', marginLeft: '-100', width: '90%' }}>
          {blogGenerals}
        </div>
        <div style={{ position: 'absolute', marginLeft: '70%', width: '10%' }}>
          <TagsList
            tags={this.props.tags}
            switchTag={this.switchTag}
            defaultTagId={this.state.defaultTagId}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ blogGenerals, tags }) => ({
  blogGenerals,
  tags
})
const mapDispatchToProps = dispatch => ({
  getBlogGenerals: () => dispatch(BlogActions.getBlogGenerals()),
  getTags: () => dispatch(BlogActions.getTags()),
  getBlogGeneralsByTagId: (id) => dispatch(BlogActions.getBlogGeneralsByTagId(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogIndex))
