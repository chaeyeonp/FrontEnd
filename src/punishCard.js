import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
    font: {
        fontFamily: 'Do Hyeon'
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        "hello"
        // <Card {...props} className={classes.root}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={12} md={10}>
        //             <CardActionArea>
        //
        //                 <CardMedia
        //                     className={classes.media}
        //                     image={require('./photo/1.jpg')}
        //                     title="Contemplative Reptile"
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h5" component="h2" className={classes.font}>
        //                        hello
        //                     </Typography>
        //                     <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
        //                         마스크 좀 쓰세요!
        //                     </Typography>
        //                 </CardContent>
        //             </CardActionArea>
        //         </Grid>
        //     </Grid>
        // </Card>
    );
}
