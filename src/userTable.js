import * as React from "react";
import {Create, EditButton, Filter, TextInput, ReferenceInput, SelectInput, ImageField, List, Datagrid, TextField, ImageInput,SimpleForm,Edit} from 'react-admin';
import {makeStyles} from "@material-ui/core/styles";
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것

const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});


export const UserList = props => (
    <List {...props}>
        <Datagrid style={{fontFamily:'Do Hyeon'}}>
            <TextField source="id" />
            <TextField source="memberName" />
            <TextField source="memberCount" />
        </Datagrid>
    </List>
);



