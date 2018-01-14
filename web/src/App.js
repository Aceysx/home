import React, {Component} from 'react'
import BlogIndex from './components/blog/index'
import BlogDetail from './components/blog/blog-detail'
import TimeIndex from './components/time/index'
import Index from './components/index'
import {Route, HashRouter as Router} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Index} />
          <Route exact path='/blog' component={BlogIndex} />
          <Route exact path='/blog/:id' component={BlogDetail} />
          <Route exact path='/time' component={TimeIndex} />
        </div>
      </Router>
    )
  }
}

export default App
