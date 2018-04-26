import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import BlogGeneral from './blog-general'
import * as BlogActions from '../../actions/blog'
import Header from '../common/blog/header'
import TagsList from './TagsList'
import LinearProgress from 'material-ui/es/Progress/LinearProgress'

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      defaultTagId: 0,
      isScrollOver: false,
      isLoading: false,
      page: 0,
      tagsListStyleChange: false
    }
  }
  componentDidMount() {
    this.props.getBlogGenerals(this.state.page, (isScrollOver) => {
      this.setState({ isLoading: false, page: this.state.page + 1, isScrollOver })
    })
    this.props.getTags()
    window.addEventListener('scroll', this.handleScroll.bind(this));

  }
  switchTag = (defaultTagId) => {

    this.setState({ defaultTagId, page: 0 },
      this.state.defaultTagId === 0 ?
        () => this.props.getBlogGenerals(this.state.page, (isScrollOver) => {
          this.setState({ isLoading: false, page: this.state.page + 1, isScrollOver })
        })
        :
        () => this.props.getBlogGeneralsByTagId(defaultTagId))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  hasTaglistChange(scrollTop) {
    if (this.state.tagsListStyleChange && scrollTop < 40) {
      this.setState({ tagsListStyleChange: false })
    }
    if (!this.state.tagsListStyleChange && scrollTop > 40) {
      this.setState({ tagsListStyleChange: true })
    }
  }

  handleScroll(event) {
    let scrollTop = window.scrollY
    this.hasTaglistChange(scrollTop)

    const { clientHeight, scrollHeight } = document.documentElement;
    if (!this.state.isLoading) {
      this.setState({ isLoading: scrollHeight - scrollTop - clientHeight === 0 }, () => {
        this.state.isLoading ? this.props.getBlogGenerals(this.state.page, (isScrollOver) => {
          this.setState({ isLoading: false, page: this.state.page + 1, isScrollOver })
        }) : ""
      })

    }
  }

  render() {
    const blogGenerals = this.props.blogGenerals.map((blog, key) => <BlogGeneral key={key} blog={blog} />)
    const style1 = {
      position: 'fixed',
      right: '20%',
      top: this.state.tagsListStyleChange ? '5%' : '13%',
      width: '10%'
    }
    return (
      <div className='bg-color'>
        <Header title='最新更新' />
        <div style={{ display: 'block' }}>
          <div ref={node => this.contentNode = node}
            style={{ marginLeft: '-100', width: '90%' }}>
            {blogGenerals}
          </div>

          <div style={style1}>
            <TagsList
              tags={this.props.tags}
              switchTag={this.switchTag}
              defaultTagId={this.state.defaultTagId}
            />
          </div>
        </div>
        {
          this.state.isScrollOver ? '' :
            this.state.isLoading ?
              <LinearProgress mode='buffer' value={100} /> : ''
        }
      </div>
    )
  }
}

const mapStateToProps = ({ blogGenerals, tags }) => ({
  blogGenerals,
  tags
})
const mapDispatchToProps = dispatch => ({
  getBlogGenerals: (page, callback) => dispatch(BlogActions.getBlogGenerals(page, callback)),
  getTags: () => dispatch(BlogActions.getTags()),
  getBlogGeneralsByTagId: (id) => dispatch(BlogActions.getBlogGeneralsByTagId(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogIndex))
