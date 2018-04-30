import React from 'react'
import { withRouter } from 'react-router-dom'
import BlogIndex from './blog/index'
import { Icon } from 'antd'
import Header from './common/blog/header'

class Index extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <BlogIndex />
      </div>
    )
  }
}

export default withRouter(Index)
