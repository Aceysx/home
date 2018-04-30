import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogActions from '../../actions/blog'
import { Card, Icon, Avatar, Tag, BackTop } from 'antd';
import '../../css/blog-index.css'
import parseTime from '../common/date-util'
const { Meta } = Card

class BlogIndex extends React.Component {
  constructor() {
    super()

  }
  componentDidMount() {
    this.props.getBlogGenerals(1, () => { })
  }


  render() {
    console.log(this.props.blogGenerals)
    const blogsList = this.props.blogGenerals.map(item => {
      const tags = item.tags.map(tag =>
        <Tag className='blog-tag' color={tag.bgColor}>
          <Icon type="tags" />
          {tag.content}</Tag>)
      return <div><h2 className='classify-tag'>哈h</h2><Card
        className='blog-card'
        cover={<img className='blog-img' src={item.headImg} />}
      // actions={[<span><Icon type="heart-o" />123</span>,
      // <Icon type="edit" />,
      // <Icon type="share-alt" />]}
      >
        <Meta
          className='blog-img-desc'
          title={item.title}
          description={<span className='blog-time'><Icon type="schedule" />{parseTime(item.time)}</span>}
        />
        <Meta
          className='blog-meta'
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={tags}
          description={item.content ? item.content.substring(0, 50) + ' ...' : ''}
        />
      </Card>
      </div>
    })
    return (
      <div className='blog-cotainer'>
        {blogsList}
        <BackTop />
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
