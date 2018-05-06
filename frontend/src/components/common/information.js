import React from 'react'
import {Card,Avatar,Row,Col} from 'antd'
const { Meta } = Card
let header_style = {
    height: '350px',
    background: '#0091EA',
    margin: '0 0 -2% 0',
    paddingTop:'4%'
  }
export default class Information extends React.Component {
      
    render() {
        return <div style={header_style}>
            <Row type="flex" justify='center'>
                <Col>
                    <Avatar className='head_img'
                     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                </Row>
            </div>
}}