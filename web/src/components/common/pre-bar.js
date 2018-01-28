import React from 'react'
import {withRouter} from 'react-router-dom'
import { Button, Toolbar, Typography} from 'material-ui'
import ArrowBack from 'material-ui-icons/ArrowBack'

class PreBar extends React.Component {
  render () {
    return (
      <Toolbar>
        <Typography type='title' color='inherit' style={{margin: 20}}>
          <Button className='color-gray-big' onClick={() => this.props.history.goBack()}>
            <ArrowBack /> back </Button>
        </Typography>
      </Toolbar>
    )
  }
}

export default withRouter(PreBar)
