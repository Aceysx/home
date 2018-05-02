import React from 'react'
import { withRouter } from 'react-router-dom'
import UrlPattern from 'url-pattern'
import * as BlogActions from '../../actions/blog'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Row, Col, Card, Icon, Avatar, Tag, BackTop } from 'antd';
import IndexHeader from '../common/blog/header'
import '../../constant/css/blog/blog-detail.css'
import '../../css/makdown.css'
import CodeBlock from '../common/markdown/code-block'
import 'gitment/style/default.css'
import Gitment from 'gitment'
import parseTime from '../common/date-util'
const { Meta } = Card

class BlogDetail extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const pattern = new UrlPattern('/blogs/:id')
    const urlParams = pattern.match(this.props.location.pathname) || {}
    this.props.getBlog(urlParams.id)
    const gitment = new Gitment({
      id: 'Aceysx--home--' + urlParams.id,
      owner: 'Aceysx',
      repo: 'home',
      oauth: {
        client_id: '84cd4e71f1f04f24b27e',
        client_secret: '6fffb464940c58190d47473adca198f7bbcf3435',
      },
    })

    gitment.render('discuss')
  }

  render() {
    const blog = this.props.blog
    const tags = blog.tags.map((tag, index) =>
      <Tag key={index} className='blog-tag' color={tag.bgColor}>
        <Icon type="tags" />
        {tag.content}
      </Tag>
    )
    return <div>
      <IndexHeader isBack />
      <Row type='flex' justify='center'>
        <Col span={15}>
          <Card
            className='blog-card'
            cover={<img className='blog-img' src={blog.headImg} />}
          >
            <Meta
              className='blog-img-desc'
              title={blog.title}
              description={<span className='blog-time'>
                <Icon type="schedule" />{parseTime(blog.time)}</span>}
            />
            {tags}

            <div className='markdown'>
              <ReactMarkdown source={blog.content} escapeHtml={false}
                renderers={{ code: CodeBlock }} />
            </div>
            <hr />
            <div id='discuss' />
          </Card>
        </Col>
        <Col span={4}>
          mulu
        </Col>
      </Row>

    </div>
  }
}

const mapStateToProps = state => ({
  blog: state.blogDetail
})
const mapDispatchToProps = dispatch => ({
  getBlog: (id) => dispatch(BlogActions.getBlog(id, () => { }))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogDetail))
