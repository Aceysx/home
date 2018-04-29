import React from 'react';
import { AppBar, Button, Toolbar, Typography } from "material-ui/es/index";
import * as Color from '../../constant/color'
import MenuIcon from 'material-ui-icons/Menu'
import Tag from '../common/blog/Tag'
import Badge from 'material-ui/Badge';

export default class TagsList extends React.Component {

  render() {
    const defaultTagId = this.props.defaultTagId
    const selectedBgColor = '#8D6E63'
    const tagsList = this.props.tags.map(item => {
      if (!item.id) {
        return
      }
      return <span style={{ display: 'inline-block', height: 30 }}
        onClick={() => this.props.switchTag(item.id)}>

        <Tag bgColor={defaultTagId === item.id ? selectedBgColor : item.bgColor}
          content={item.content + ' | ' + item.blogs.length} />
      </span>
    })

    return <div style={{ width: '270%' }}>
      <AppBar position='static' style={{ background: Color.BLUE, marginBottom: 10 }}>
        <Toolbar>
          <Typography type='title' color='inherit'>
            <Button style={{ color: Color.WHITE, fontWeight: 'bold' }}
              color='contrast'>
              Tags </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <span style={{ display: 'inline-block', height: 30 }}
        onClick={() => this.props.switchTag(0)}>
        <Tag bgColor={defaultTagId === 0 ? selectedBgColor : '#00C853'} content='ALL' />
      </span>
      {tagsList}
    </div>
  }
}