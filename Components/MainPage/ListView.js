import React from "react";

const ListView = (props) => {
        return(
            <div>
                        <div className='display_wrapper'>  
                            <div className="count_users">
                                <p className="number_user"> {props.data.length} employees displayed</p>
                            </div>
                            <div className="display_items">
                                <button id="block_btn" onClick={props.changeDirectionBlock} ><i className="fa fa-th-large"></i></button>
                                <button id="list_btn" onClick={props.changeDirectionList}><i className="fa fa-bars"></i></button>
                            </div>
                        </div>
                        <div className="table_column">
                        <div className="avatar_column">
                            <i className="far fa-circle"></i>
                            <p>Photo</p>
                        </div>
                        <div className="name_column">
                            <i className="fa fa-user-circle"></i>
                            <p className="search_name" onClick={props.sortItemsForName} onDoubleClick={props.sortItemsForNameReverted}>Name</p>
                        </div>
                        <div className="department_column">
                            <i className="fa fa-briefcase"></i>
                            <p className="department_search" onClick={props.sortItemsForDepartment}>Department</p>
                        </div>
                        <div className="room_column">
                            <i className="fa fa-door-open"></i>
                            <p className="room_search" onClick={props.sortItemsForRoom}>Room</p>
                        </div>
                    </div>
                             
                </div>

        )
    }



export default ListView;