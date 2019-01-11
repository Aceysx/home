import React from 'react'
import {Button, Col, Row, Icon, Input, List, Badge, Tag} from 'antd'

export default class Quadrant extends React.Component {
  state = {
    content:''
  }

  handleSubmit = () => {
    this.props.submitContent(this.state.content, this.props.type)
    this.setState({content: ''})
  }

  render() {
    const {quadrants} = this.props

    return <div style={{height: '100%'}}>
      <Row className='quadrant-content-box'>
        <List
          bordered
          dataSource={quadrants}
          renderItem={item =>
            <List.Item>
              <Col span={22}>{item.content}</Col>
              <Col span={2}><Icon type='check-circle' theme='twoTone' twoToneColor='#52c41a'/></Col>
            </List.Item>}
        />
      </Row>

      <Row className='quadrant-operation-box'>
        <Col span={4}>
          <Badge count={quadrants.length} title='重要不紧急'/>
        </Col>
        <Col span={16}>
          <Input onChange={e => this.setState({content: e.target.value})}/>

        </Col>
        <Col span={3} offset={1}>
          <Button type='primary' onClick={this.handleSubmit}>Submit</Button>
          {/* <Icon */}
          {/* type='plus-circle' */}
          {/* theme='twoTone' */}
          {/* className='quadrant-add-btn' */}
          {/* /> */}
        </Col>
      </Row>
    </div>
  }

}
