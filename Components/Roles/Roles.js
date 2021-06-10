import React from "react";
import "../../style/rolesPage.scss"
const Roles = (props) => {
    let hr, employee;
    props.element.address_book__redesign  ? (hr = "activeRole", employee = 'disactiveRole') : (hr = "disactiveRole", employee = 'activeRole');
    return(
        <div>
            <div className="cards_item">
                <div className="cards_avatar">
                    <img src={props.element.avatar}/>
                </div>
                <div className="user_name">
                    <p className="cards_nameEN">{props.element.nameEN}</p>
                    <p className="cards_nameRU">{props.element.nameRU}</p>
                </div>
                <div className="cards_roles">
                    <button className={employee} onClick={() => {
                    props.checkRole(props.element.nameEN)
                    }}>employee</button>
                    <button className={hr} onClick={() =>{props.checkRole(props.element.nameEN)}}>hr</button>
                    </div>
                     
                    <div className="admin_role">
                        <button>admin</button>
                    </div>
                </div>
                <hr/>
        </div>
    )
}

export default Roles;