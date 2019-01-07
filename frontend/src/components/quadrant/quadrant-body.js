import React from 'react'
import {Row, Col, Form, Button, Input, List} from 'antd'
import {getAll, save} from "../../constant/DBUtil";

class Quadrant extends React.Component {
  state = {
    refresh: false
  }
  handleSubmit = (e, type) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      save(Object.assign({}, values, {type}))
      this.setState({refresh: !this.state.refresh})
    });
  }

  getQuadrantsByType = (type) => {
    const quadrants = getAll()
    return quadrants.filter(item => item.type === type).map(item => item.content)
  }
  submitComponent = (type) => {
    const {getFieldDecorator} = this.props.form
    return <Form layout='inline' onSubmit={(e) => this.handleSubmit(e, type)}>
      <Form.Item label=''>
        {getFieldDecorator('content')(<Input/>)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>
  }
  quadrants = (type) => {
    return <List
      bordered
      dataSource={this.getQuadrantsByType(type)}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
  }

  render() {
    return <div style={{height: '100%', background: 'white'}}>
      <Row style={{height: '48%', border: '1px solid red'}}>
        <Col span={12}>
          {this.quadrants('UnEI')}
          {this.submitComponent('UnEI')}
        </Col>
        <Col span={12}>
          {this.quadrants('EI')}
          {this.submitComponent('EI')}
        </Col>
      </Row>
      <Row style={{height: '1%'}}>
        <Col span={8}>不紧急</Col>
        <Col span={8} offset={8}>紧急</Col>
      </Row>
      <Row style={{height: '48%', border: '1px solid green'}}>
        <Col span={12}>
          {this.quadrants('UnEUnI')}
          {this.submitComponent('UnEUnI')}
        </Col>
        <Col span={12}>
          {this.quadrants('EUnI')}
          {this.submitComponent('EUnI')}
        </Col>
      </Row>
    </div>
  }
}

const WrappedDemo = Form.create()(Quadrant)
export default WrappedDemo
