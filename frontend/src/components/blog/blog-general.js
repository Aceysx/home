import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Tag from '../common/blog/Tag'
import ScrollToTop from 'react-scroll-up'
import '../../constant/css/blog/blog-general.css'
import '../../constant/css/common.css'
import '../../constant/css/lanren.css'
import { Card, Typography } from "material-ui/es/index";
import { CardContent, CardMedia } from "material-ui/es/Card/index";

class BlogGeneral extends React.Component {
  render() {
    const blog = this.props.blog
    const tags = blog.tags.map((tag, index) => <Tag key={index} {...tag} />)

    return <div><Card className='blog-general-card'>

      <Link to={`/blogs/${blog.id}`}>
        <CardMedia
          className='blog-general-media'
          image={blog.headImg} />
      </Link>

      <CardContent style={{ padding: '0 10' }}>
        <Typography type='headline'>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: '#2196F3' }}> {blog.title} </Link>
          </span>
          <span className='blog-general-time'>{new Date(blog.time).toDateString()}</span>
        </Typography>
        <Typography style={{ display: 'flex', flexWrap: 'wrap' }}>
          {tags}
        </Typography>
      </CardContent>
    </Card>
      <ScrollToTop showUnder={160}>
        <div id="animation">
          <div className="spaceship">
            <div className="antenna"></div>
            <div className="body"></div>
            <div className="window"></div>
            <div className="fins"></div>
            <div className="rocket"></div>
            <div className="fireWrapper">
              <div className="fire">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollToTop>
    </div>
  }
}

export default withRouter(BlogGeneral)
