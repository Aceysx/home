import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogActions from '../../actions/blog'
import { Row, Col, Card, Icon, Avatar, Tag, BackTop } from 'antd';
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
    const blogsList = this.props.blogGenerals.map(item => {
      const tags = item.tags.map(tag =>
        <Tag className='blog-tag' color={tag.bgColor}>
          <Icon type="tags" />
          {tag.content}</Tag>)
      return <Row type="flex" justify='center'>
        <Col xs={{ span: 23 }} lg={{ span: 15 }}>
          <h2 className='classify-tag'>哈h</h2>
          <Link to={'./blogs/' + item.id}>
            <Card
              className='blog-card'
              cover={<img className='blog-img' src={item.headImg} />}
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
          </Link>
        </Col>
      </Row>
    })
    return (
      <div>
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
