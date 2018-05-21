import React from 'react'
import { withRouter } from 'react-router-dom'
import BlogIndex from './blog/index'
import { Icon } from 'antd'
import Header from './common/blog/header'
import Footer from './common/footer';

class Index extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <BlogIndex />
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Index)
