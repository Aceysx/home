import React from 'react'
import '../../../css/common/common.css'

const Tag = (props) => {
  return <span key={props.id}
    className='tag'
    style={{background: `${props.bgColor}`}}>
    {props.content}
  </span>
}

export default Tag
