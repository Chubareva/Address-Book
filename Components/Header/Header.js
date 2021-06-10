import React from "react";
import { Link } from "react-router-dom";
import  "../../style/mainPage.scss";
const Header=(props) =>{
    let login = sessionStorage.getItem('user');
    return (
            <header className="header">
                <div className="wrapper">
                     <div className="logo">
                        <Link to="/main">
                        <div className="logo_title">LEVERX GROUP</div>
                        <div className="logo_subtitle">EMPLOYEE SERVICES</div>
                        </Link>
                    </div>
                     <nav className="menu">
                        <div className="list">
                            <a className="list_link list_link_active">Address Book</a>
                            <a className="list_link list_link_disabled">Leave Request</a>
                            <a className="list_link list_link_disabled">Settings</a>
                        </div>
                    </nav>
                    <div className="user_header">
                    <div className="user_settings">
                        <button className="btn"><i className="fa fa-location-arrow"></i></button>
                        <button className="user_photo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU"></img><p>{login ? login :"please log in"}</p></button>
                        <Link to="/login"><button className="logout_btn" onClick={props.reset}><i className="fa fa-power-off"></i></button></Link>
                    </div>
                    </div>
                </div>
            </header>   
    )
    }

export default  Header;