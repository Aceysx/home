import React from 'react'
import {withRouter} from 'react-router-dom'
import * as Color from '../../constant/color'
import MenuIcon from 'material-ui-icons/Menu'
import {AppBar, Button, Toolbar, Typography} from "material-ui/es/index";

class APPBar extends React.Component {
  render () {
    return (
      <AppBar position='static' style={{background: Color.BLACK}}>
        <Toolbar>
          <Typography type='title' color='inherit'>
            <Button style={{color: Color.WHITE, fontWeight: 'bold'}}
              href='/#' color='contrast'>
              <MenuIcon /> Acey </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(APPBar)
