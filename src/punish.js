import * as React from "react";
import {ImageField, List, Datagrid} from "react-admin";
import {connect} from "react-redux";
import GroupSwitcher from "./punishCount";

export const UsersList = ({groupNameFilter, ...props}) => {
    if (groupNameFilter) {
        const {filter} = props;
        props = {...props, filter: {...filter, memberCount: groupNameFilter}};
    }
    return (
        <React.Fragment>
            <GroupSwitcher/>
            <List {...props}>
                <Datagrid>
                    <ImageField source="memberFace"/>
                </Datagrid>
            </List>
        </React.Fragment>
    );
};

const mapStateToProps = ({groupNameFilter}) => {
    return {groupNameFilter};
};

export default connect(
    mapStateToProps,
    {}
)(UsersList);

