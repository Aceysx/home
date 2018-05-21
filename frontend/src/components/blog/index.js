import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogActions from '../../actions/blog'
import { Row, Col, Card, Icon, Avatar, Tag, BackTop, Carousel } from 'antd';
import '../../css/blog-index.css'
import headImage from '../../constant/images/head.jpeg'
import Information from '../common/information'
import parseTime from '../common/date-util'
const { Meta } = Card

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      totalPage: 1
    }
  }
  componentDidMount() {
    this.getBlogGenerals(this.state.currentPage)
  }
  prePage = () => {
    let { currentPage } = this.state
    this.getBlogGenerals(--currentPage)
  }

  getBlogGenerals = (currentPage) => {
    this.props.getBlogGenerals(currentPage, (data) => {
      this.setState({ currentPage, totalPage: data.totalPages })
    })
  }

  nextPage = () => {
    let { currentPage } = this.state
    this.getBlogGenerals(++currentPage)
  }

  render() {
    const blogsList = this.props.blogGenerals.map(item => {
      const tags = item.tags.map(tag =>
        <Tag className='blog-tag' color={tag.bgColor}>
          <Icon type="tags" />
          {tag.content}</Tag>)

      return <Row type="flex" justify='center'>
        <Col xs={{ span: 23 }} lg={{ span: 15, offset: 1 }}>
          {/* <h2 className='classify-tag'>哈h</h2> */}
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
                avatar={<Avatar src={headImage} />}
                title={tags}
              />
            </Card>
          </Link>
        </Col>
      </Row>
    })
    return (
      <div>
        {blogsList}
        <Row type="flex" justify='center'>
          <Col xs={{ span: 23 }} lg={{ span: 15, offset: 1 }}>
            {this.state.currentPage <= 0 ? ''
              :
              <a className='pre-page turn-page' onClick={this.prePage}>
                <span><Icon type="double-left" /></span>
                Pre
             </a>
            }
            {this.state.currentPage >= this.state.totalPage - 1 ? ''
              :
              < a className='next-page turn-page' onClick={this.nextPage}> Next
            <span><Icon type="double-right" /></span>
              </a>
            }
          </Col>
        </Row>
        <div className='gototop'>
        <BackTop className='toTop'/>
        </div>
      </div >
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
