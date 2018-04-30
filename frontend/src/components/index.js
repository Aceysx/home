import React from 'react'
import {withRouter} from 'react-router-dom'
import BlogIndex from './blog/index'

class Index extends React.Component {
  render () {
  
    return (
      <div>
        <BlogIndex/>
      </div>
    )
  }
}

export default withRouter(Index)
