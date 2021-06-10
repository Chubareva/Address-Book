import React from "react";
import Roles from "./Roles";
import Input from "../Input/Input"

const RolesWrapper = (props) => {
    return(
        <div className="wrapper">
            <div className="list_users">
            <div className="roles_permissions">
                <p>roles & permissions</p>
            </div>
            <hr/>
            <div className="headers">
                <div className="search_wrapper">
                <div className="search_form">
                    <button type="search" className="search_icon"><i className="fas fa-search" onClick={props.searchUsers}></i></button>
                    <Input placeholder="John Smith / Джон Смит" value = {props.searchInput} onChange={props.onChange} onKeyDown={props.searchUsers} className="search_input" />
                </div>
                </div>
                <div className="address_wrapper">
                <div className="address_book">
                    <p>Address book role</p>
                </div>
                </div>
                <div className="admin_wrapper">
                <div className="admin">
                    <p>admin</p>
                </div>
                </div>

            </div>
            <hr/>
            <div className="users_roles">
            {props.data.map(element => {return  <Roles hr={props.hr} employee={props.employee} element={element} key={element.ID} checkRole={props.checkRole} />})}
            </div>
        </div>
        </div>
    )
}

export default RolesWrapper;