import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import {Admin, Datagrid, EditButton, List, Resource, TextField} from "react-admin";
import {MemberList} from "./memberTable";
import {UserList} from "./userTable";
import Sample from "./punishCard";
import Lout from './layout'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        backgroundColor:"gray"

    },
    media: {
        height: 140,
    },
});

export default function Userboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

        <Card>
            <CardHeader title="플레이데이터"/>
            <CardContent><Resource name="member" list={Lout}/></CardContent>

        </Card>
        </div>
    );


}
