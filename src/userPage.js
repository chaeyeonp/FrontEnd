import * as React from "react";
import {Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import dataProv from './dataProv';
import Userboard from "./Userboard";

import {Card} from "@material-ui/core";
import {UserList} from "./userTable";

const dataProvider = dataProv;
export const userPage = () => (
    <Admin dashboard={Userboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="member" list={UserList}/>

    </Admin>
)

export default userPage
