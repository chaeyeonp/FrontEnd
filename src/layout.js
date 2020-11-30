import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {Resource} from 'react-admin';
import {UserList} from "./userTable";
import Sample from "./punishCard";


const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'sans-serif']
    }
});


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        maxWidth: 752,
        alignContent: 'center'
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        fontFamily: 'Do Hyeon'

    },
}));

export default function MultipleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={4}>
                <Grid item xs={20} md={6}>

                    <Typography variant="h6" className={classes.title}>
                        벌점 현황
                    </Typography>
                    <div className={classes.demo}>
                        <Resource name="member" list={UserList}/>
                    </div>
                </Grid>
                <Grid item xs={20} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        불명예의 전당
                    </Typography>
                    <div className={classes.demo}>
                        <Resource name="member" list={Sample}/>

                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
