import React, {Component} from 'react'
import Layout from './components/common/layout/layout'
import BlogIndex from './components/blog/index'
import BlogDetail from './components/blog/blog-detail'
import TimeIndex from './components/time/index'
import {Route, HashRouter as Router} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={BlogIndex} />
          <Route exact path='/blog' component={BlogIndex} />
          <Route exact path='/blog/:id' component={BlogDetail} />
          <Route exact path='/time' component={TimeIndex} />
        </Layout>
      </Router>
    )
  }
}

export default App
