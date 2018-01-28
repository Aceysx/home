import React from 'react'
import {Avatar, Card, CardContent, CardMedia, Chip, Typography} from 'material-ui'
import {withRouter, Link} from 'react-router-dom'
import '../../constant/css/blog/blog-general.css'
import Tag from '../common/blog/Tag'

const styles = {
  card: {
    maxWidth: '65%',
    margin: '0 auto',
    marginBottom: 25
  },
  media: {
    height: 200
  }
}

class BlogGeneral extends React.Component {
  render () {
    const blog = this.props.blog
    const tags = blog.tags.map((tag) => <Tag {...tag} />)

    return <Card className='blog-general-card'>
      <Link to={`/blog/${blog.id}`}>
        <CardMedia className='blog-general-media'
          image={blog.headImg} />
      </Link>
      <CardContent style={{padding: '0 10'}}>
        <Typography type='headline'>
          <span style={{fontSize: '20px', fontWeight: 'bold'}}>
            <Link to={`/blog/${blog.id}`} style={{textDecoration: 'none', color: '#2196F3'}}> {blog.title} </Link>
          </span>
          <span className='blog-general-time'>{new Date(blog.time).toDateString()}</span>
        </Typography>
        <Typography style={{display: 'flex', flexWrap: 'wrap'}}>
          {tags}
        </Typography>
      </CardContent>
    </Card>
  }
}

export default withRouter(BlogGeneral)
