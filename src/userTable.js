import * as React from "react";
import {Create, EditButton, Filter, TextInput, ReferenceInput, SelectInput, ImageField, List, Datagrid, TextField, ImageInput,SimpleForm,Edit} from 'react-admin';
// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것




export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="memberName" />
            <TextField source="memberCount" />
        </Datagrid>
    </List>
);



