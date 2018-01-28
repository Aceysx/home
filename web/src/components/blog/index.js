import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import BlogGeneral from './blog-general'
import * as BlogActions from '../../actions/blog'
import Header from '../common/blog/header'

class BlogIndex extends React.Component {
  componentDidMount () {
    this.props.getBlogGenerals()
  }

  render () {
    const blogGenerals = this.props.blogGenerals.map((blog, key) => <BlogGeneral key={key} blog={blog} />)

    return (
      <div className='bg-color'>
        <Header title='最新更新' />
        <div>
          {blogGenerals}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  blogGenerals: state.blogGenerals
})
const mapDispatchToProps = dispatch => ({
  getBlogGenerals: () => dispatch(BlogActions.getBlogGenerals())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogIndex))
