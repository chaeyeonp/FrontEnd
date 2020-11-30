import * as React from "react";
import {List,ImageField, Datagrid} from 'react-admin';

import Card from "@material-ui/core/Card";
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것

const WebFont = require('webfontloader');

WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});

export const MemberList = props => (
    <List {...props}>
        <Datagrid>
            <ImageField source="memberFace"/>
        </Datagrid>
    </List>
);

