import React from 'react'
import Chip from 'material-ui/es/Chip/Chip'
import Avatar from 'material-ui/es/Avatar/Avatar'

const Tag = (props) => {
  return <Chip key={props.id}
    style={{margin: '5px 10px 0 0', background: `#424242`, color: 'white', fontWeight: 'bold'}}
    avatar={<Avatar
      src={props.headImg} />}
    label={props.content}
    />
}

export default Tag
