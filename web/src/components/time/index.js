import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: '80%',
        margin:'0 auto'
    },
    media: {
        height: 200,
    },
};

function TimeIndex(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="http://www.sdklty.com/d/file/2015/11/27/2123f7686d354b4d1b67b99a7f657747.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    </Typography>

                </CardContent>

            </Card>

        </div>
    );
}


export default withStyles(styles)(TimeIndex);