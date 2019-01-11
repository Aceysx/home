import React from 'react'
import {Col, Row} from 'antd'
import {getAll, save} from "../../constant/DBUtil";
import Quadrant from './quadrant'
import '../../css/quadrant/quadrant.css'

const TYPEs = ['UnEI', 'EI', 'UnEUnI', 'EUnI']

class QuadrantBody extends React.Component {
  state = {
    refresh: false
  }

  submitContent = (content, type) => {
    save({content, type})
    this.refresh()
  }

  refresh() {
    this.setState({refresh: !this.state.refresh})
  }

  getQuadrantByType = (type) => {
    const quadrants = getAll()
    return quadrants.filter(quadrant => quadrant.type === type)
  }

  render() {
    return <div className='quadrant-container'>
      <Row style={{height: '50%'}}>
        {
          TYPEs.map(type =>
            <Col span={12} className='quadrant-body'>
              <Quadrant
                submitContent={this.submitContent}
                quadrants={this.getQuadrantByType(type)}
                type={type}
              />
            </Col>
          )
        }
      </Row>
    </div>
  }
}

export default QuadrantBody
