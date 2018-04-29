import React from 'react'
import {withRouter} from 'react-router-dom'
import ArrowBack from 'material-ui-icons/ArrowBack'
import '../../constant/css/common.css'
import {Button, Toolbar, Typography} from "material-ui/es/index";

class PreBar extends React.Component {
  render () {
    return (
      <Toolbar>
        <Typography type='title' color='inherit' className='preBar' >
          <Button className='color-gray-big' onClick={() => this.props.history.goBack()}>
            <ArrowBack /> back </Button>
        </Typography>
      </Toolbar>
    )
  }
}

export default withRouter(PreBar)
