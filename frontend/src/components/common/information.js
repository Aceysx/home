import React from 'react'
import {Avatar, Col, Row} from 'antd'
import headImg from '../../images/head.jpeg'
import '../../css/blog/information.css'
export default class Information extends React.Component {
  render () {
    return <div className='profile__box'>
      <Row type='flex' justify='center'>
        <Col>
          <Avatar className='profile__headImg'
            src={headImg} />
        </Col>
      </Row>
    </div>
  }
}
