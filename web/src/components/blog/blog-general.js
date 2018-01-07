import React from 'react'
import {Avatar, Card, CardContent, CardMedia, Chip, Typography} from 'material-ui'
import {withRouter, Link} from 'react-router-dom'
import grey from 'material-ui/es/colors/grey'

const styles = {
  card: {
    maxWidth: '80%',
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
    const tags = blog.tags.map((tag, key) =>
      <Chip key={key} style={{margin: '5px 10px 0 0', background: `${tag.color}`, color: 'white', fontWeight: 'bold'}}
        avatar={<Avatar
          src={tag.headImg} />}
        label={tag.content}
            />
        )

    return <Card style={styles.card}>
      <Link to={`/blog/${blog.id}`} >
        <CardMedia
          style={styles.media}
          image={blog.headImg} />
      </Link>
      <CardContent style={{padding: '0 10'}}>
        <Typography type='headline'>
          <span style={{fontSize: '20px', fontWeight: 'bold'}}>
            <Link to={`/blog/${blog.id}`} style={{textDecoration: 'none', color: '#2196F3'}}> {blog.title} </Link>
          </span>
          <span style={{fontSize: 13, float: 'right', color: grey[600]}}>{new Date(blog.time).toLocaleDateString()}</span>
        </Typography>
        <Typography style={{display: 'flex', flexWrap: 'wrap'}}>
          {tags}
        </Typography>
      </CardContent>
    </Card>
  }
}

export default withRouter(BlogGeneral)
