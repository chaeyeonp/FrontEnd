import * as React from "react";
import {Card, CardContent, CardHeader} from '@material-ui/core';
import {Admin, Datagrid, EditButton, List, Resource, TextField} from "react-admin";
import {MemberList} from "./memberTable";
import {UserList} from "./userTable";
import Sample from "./punishCard";
import Lout from './layout'
import {makeStyles} from "@material-ui/core/styles";


const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});

const useStyles = makeStyles({
    root: {
        height:"100%",
        width:"100%",
        backgroundColor: "#dd9999"
    },
    media: {
        height: 140,
    },

    font: {
        fontFamily: 'Sansita Swashed',
        textAlign: "center",
        fontSize:"40px",
        // background: "linear-gradient(15deg, #d33f34 50%, #a61322 50.1%)",
        backgroundSize:"20%"
    }

});

export default function Userboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Card>
                <CardHeader/>
                <h1 className={classes.font}>🎅Playdata🎅</h1>
                <CardContent className={classes.content}><Resource name="member" list={Lout}/></CardContent>

            </Card>
        </div>
    );


}
