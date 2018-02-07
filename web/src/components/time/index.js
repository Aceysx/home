import React from 'react'
import {Card, Typography} from "material-ui/es/index";
import {CardContent, CardMedia} from "material-ui/es/Card/index";


function TimeIndex (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='http://www.sdklty.com/d/file/2015/11/27/2123f7686d354b4d1b67b99a7f657747.jpg'
          title='Contemplative Reptile'
                />
        <CardContent>
          <Typography type='headline' component='h2'>
                        Lizard
                    </Typography>
          <Typography component='p'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    </Typography>

        </CardContent>

      </Card>

    </div>
  )
}

export default (TimeIndex)
