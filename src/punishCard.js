import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {Datagrid, EditButton, ImageField, List, TextField} from "react-admin";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="photo/1.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                A
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                마스크 좀 쓰세요!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                {/*    <CardActionArea>*/}
                {/*        <CardMedia*/}
                {/*            className={classes.media}*/}
                {/*            image="/static/images/cards/contemplative-reptile.jpg"*/}
                {/*            title="Contemplative Reptile"*/}
                {/*        />*/}
                {/*        <CardContent>*/}
                {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                {/*                C*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                {/*                마스크 좀 쓰세요!*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </CardActionArea>*/}
                {/*</Grid>*/}
            {/*    <Grid item xs={12} md={6}>*/}
            {/*        <CardActionArea>*/}
            {/*            <CardMedia*/}
            {/*                className={classes.media}*/}
            {/*                image="/static/images/cards/contemplative-reptile.jpg"*/}
            {/*                title="Contemplative Reptile"*/}
            {/*            />*/}
            {/*            <CardContent>*/}
            {/*                <Typography gutterBottom variant="h5" component="h2">*/}
            {/*                    B*/}
            {/*                </Typography>*/}
            {/*                <Typography variant="body2" color="textSecondary" component="p">*/}
            {/*                    마스크 좀 쓰세요!*/}
            {/*                </Typography>*/}
            {/*            </CardContent>*/}
            {/*        </CardActionArea>*/}
            {/*        <CardActionArea>*/}
            {/*            <CardMedia*/}
            {/*                className={classes.media}*/}
            {/*                image="/static/images/cards/contemplative-reptile.jpg"*/}
            {/*                title="Contemplative Reptile"*/}
            {/*            />*/}
            {/*            <CardContent>*/}
            {/*                <Typography gutterBottom variant="h5" component="h2">*/}
            {/*                    D*/}
            {/*                </Typography>*/}
            {/*                <Typography variant="body2" color="textSecondary" component="p">*/}
            {/*                    마스크 좀 쓰세요!*/}
            {/*                </Typography>*/}
            {/*            </CardContent>*/}
            {/*        </CardActionArea>*/}
                </Grid>
            </Grid>
        </Card>
    );
}
