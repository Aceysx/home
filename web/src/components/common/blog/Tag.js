import React from 'react'
import '../../../constant/css/common.css'

const Tag = (props) => {
  return <span key={props.id}
    className='tag'
    style={{background: `${props.bgColor}`}}>
    {props.content}
  </span>
}

export default Tag
