import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "material-ui/es/index";
import * as Color from '../../constant/color'
import MenuIcon from 'material-ui-icons/Menu'
import Tag from '../common/blog/Tag'

export default class TagsList extends React.Component{

  render(){
    const tagsList = this.props.tags.map(item =>{
      return <span style={{display:'inline-block',height:30}}><Tag bgColor={item.bgColor} content={item.content}/></span>
    })
    return <div style={{width:'270%'}}>
       <AppBar position='static' style={{background: Color.BLUE,marginBottom:10}}>
        <Toolbar>
          <Typography type='title' color='inherit'>
            <Button style={{color: Color.WHITE, fontWeight: 'bold'}}
              color='contrast'>
              Tags </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    {tagsList}
  </div>
  }
}