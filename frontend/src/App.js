import React, {Component} from 'react'
import Index from './components/index'
import {Route, HashRouter as Router} from 'react-router-dom'
import BlogDetail from './components/blog/blog-detail'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Index} />
          {/* <Route exact path='/blogs' component={BlogIndex} />
          <Route exact path='/manage/blogs' component={BlogAdd} />
          <Route exact path='/manage/blogs/:id' component={BlogUpdate} />
          <Route exact path='/manage/tags' component={TagAdd} />
          {/* <Route exact path='/time' component={TimeIndex} /> */}
          <Route exact path='/blogs/:id' component={BlogDetail} />
        </div>
      </Router>
    )
  }
}

export default App
