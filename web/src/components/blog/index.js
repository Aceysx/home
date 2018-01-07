import React from 'react'
import Button from 'material-ui/Button'
import {Add} from 'material-ui-icons'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import BlogGeneral from './blog-general'
import blue from 'material-ui/es/colors/blue'
import orange from 'material-ui/es/colors/orange'
import * as BlogActions from '../../actions/blog'

class BlogIndex extends React.Component {
  componentDidMount () {
    this.props.getBlogGenerals()
  }
  render () {
    const blogGenerals = this.props.blogGenerals.map((blog, key) => <BlogGeneral key={key} blog={blog} />)

    return (
      <div>
        <div>
          {blogGenerals}
        </div>
        <Button fab aria-label='add' style={{position: 'fixed', right: 100, bottom: 50, color: orange[900], background: blue[300]}}>
          <Add />
        </Button>
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
