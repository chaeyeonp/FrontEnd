import * as React from "react";
import {Admin, Resource} from 'react-admin';
import authProvider from './authProvider';
import dataProv from './dataProv';
import Userboard from "./Userboard";
import { groupNameFilterReducer } from "./punishCount";


import {Card} from "@material-ui/core";
import {UserList} from "./userTable";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {

    }
});

const dataProvider = dataProv;


export const UserPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Admin dashboard={Userboard} authProvider={authProvider} dataProvider={dataProvider} customReducers={{ groupNameFilter: groupNameFilterReducer }}
            >
                <Resource name="member" list={UserList}/>

            </Admin>
        </div>
    )
};

export default UserPage
