import React from 'react'
import {withRouter} from 'react-router-dom'
import UrlPattern from 'url-pattern'
import * as BlogActions from '../../actions/blog'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'
import {Card, Col, Icon, Row, Tag} from 'antd'
import IndexHeader from '../common/blog/header'
import '../../css/blog/blog-detail.css'
import '../../css/common/markdown.css'
import CodeBlock from '../common/markdown/code-block'
import 'gitment/style/default.css'
import Gitment from 'gitment'
import parseTime from '../common/date-util'

const { Meta } = Card

class BlogDetail extends React.Component {

  componentDidMount () {
    const pattern = new UrlPattern('/blogs/:id')
    const urlParams = pattern.match(this.props.location.pathname) || {}
    this.props.getBlog(urlParams.id)
    const gitment = new Gitment({
      id: 'Aceysx--home--' + urlParams.id,
      owner: 'Aceysx',
      repo: 'home',
      oauth: {
        client_id: '8bdaa2a52877bcb47364',
        client_secret: '49e107a62c3830d596d94d7715161f3a4cf1dcce'
      }
    })

    gitment.render('discuss')
  }

  render () {
    const blog = this.props.blog
    const tags = blog.tags.map((tag, index) =>
      <Tag key={index} className='blog-tag' color={tag.bgColor}>
        <Icon type='tags' />
        {tag.content}
      </Tag>
    )
    return <div>
      <IndexHeader isBack />
      <Row type='flex' justify='center'>
        <Col xs={{ span: 24 }} lg={{ span: 14 }}>
          <Card
            className='blog-card'
            cover={<img className='blog-img' src={blog.headImg} />}
          >
            <Meta
              className='blog-img-desc'
              title={blog.title}
              description={<span className='blog-time'>
                <Icon type='schedule' />{parseTime(blog.time)}</span>}
            />
            <div style={{marginBottom: 20}}>
              {tags}
            </div>
            <div className='markdown'>
              <ReactMarkdown source={blog.content} escapeHtml={false}
                renderers={{ code: CodeBlock }} />
            </div>
            <hr />
            <div id='discuss' />
          </Card>
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
