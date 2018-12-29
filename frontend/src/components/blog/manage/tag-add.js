import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as BlogActions from '../../../actions/blog'
import Tag from '../../common/blog/Tag'
import {Input} from 'material-ui/es/index'

class TagAdd extends React.Component {
  constructor () {
    super()
    this.state = {
      content: '',
      bgColor: ''
    }
  }

  submit () {
    this.props.addTag(this.state)
  }
  render () {
    return <div>
      content<Input value={this.state.content} onChange={(e) => this.setState({content: e.target.value})} />
      color<Input value={this.state.bgColor} onChange={(e) => this.setState({bgColor: e.target.value})} />
      <Tag bgColor={this.state.bgColor} content={this.state.content} />
      <button onClick={this.submit.bind(this)}>提交</button>
    </div>
  }
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
  addTag: (tag) => dispatch(BlogActions.addTag(tag))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagAdd))
