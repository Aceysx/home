import React from 'react'
import {Card,Avatar,Row,Col} from 'antd'
import head_img from '../../constant/images/head.jpeg'
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
                     src={head_img} />
                </Col>
                </Row>
            </div>
}}