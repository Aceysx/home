import React from 'react'
import * as Color from '../../constant/color'
import {Button} from "material-ui/es/index";
import withStyles from "material-ui/es/styles/withStyles";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})
class MenuButtons extends React.Component {
  render () {
    const { classes } = this.props
    return <div>
      <Button className={classes.button} raised
        style={{backgroundColor: Color.BLUE, color: Color.WHITE, fontWeight: 'bold'}}
        href='/#/blogs'>
                BLOGs
            </Button>
      <Button className={classes.button} raised style={{backgroundColor: Color.YELLOW, color: Color.WHITE, fontWeight: 'bold'}}>
                TIME
            </Button>
      <Button className={classes.button} raised style={{backgroundColor: Color.GREP, color: Color.WHITE, fontWeight: 'bold'}}>
                KNOWLEDGE
            </Button>
      <Button className={classes.button} raised style={{backgroundColor: Color.PINK, color: Color.WHITE, fontWeight: 'bold'}}>
                FLAGS
            </Button>
    </div>
  }
}

export default withStyles(styles)(MenuButtons)
