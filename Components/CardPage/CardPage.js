import React from "react";
import { Link } from "react-router-dom";
import "../../style/cardPage.scss";

const CardPage = (props) => {
    let role = sessionStorage.getItem('role');
    return(
        <div className="wrapper">
            <div className="user_card">
                    <div className="redirect_button">
                        <Link to="/main"><button className="redirect_btn"><i className="fa fa-arrow-circle-left"></i></button></Link>
                    </div>
                    <div className="user_avatar">
                        <img src={props.element.avatar}/>
                        <p className="user_gender">{props.element.gender}</p>
                        <p className="user_nameEn">{props.element.nameEN}</p>
                        <p className="user_nameRu">{props.element.nameRU} {props.element.middle_name}</p>
                        <div className="user_desc">
                            <p className="user_id">ID {props.element.ID}</p>
                            <p className="business_card">Business card</p>
                        </div>
                    </div> 
                    <div className="users">
                        <div className="user_title">
                            <p className="title">general info</p>
                        </div>
                        <hr/>
                        <div className="user_info">
                            <div className="info_row">
                                <i className="fa fa-briefcase"></i>
                                <p className="info_title_row">Department</p>
                                <p>{props.element.job}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-door-open"></i>
                                <p className="info_title_row">Room</p>
                                <p>{props.element.room}</p>
                            </div>
                        </div>
                        <div className="user_title">
                            <p className="title">contacts</p>
                        </div>
                        <hr/>
                        <div className="user_info">
                            <div className="info_row">
                                <i className="fa fa-at"></i>   
                                <p className="info_title_row">Internal phone</p>
                                <p>{props.element.internal_phone}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-mobile-alt"></i>
                                <p className="info_title_row">Mobile phone</p>
                                <p>{props.element.phone}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-at"></i>
                                <p className="info_title_row">Email</p>
                                <p>{props.element.email}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-at"></i>
                                <p className="info_title_row">Skype</p>
                                <p>{props.element.skype}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-copyright"></i>
                                <p className="info_title_row">C-Number</p>
                                <p>{props.element.cnumber}</p>
                            </div>
                        </div>
                        <div className="user_title">
                            <p className="title">profile info</p>
                        </div>
                        <hr/>
                        <div className="user_info">
                            <div className="info_row">
                                <i className="fa fa-calendar-alt"></i>
                                <p className="info_title_row">Hire date</p>
                                <p>{props.element.data_hired}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-bolt"></i>
                                <p className="info_title_row">Status</p>
                                <p>{props.element.is_active}</p>
                            </div>
                        </div>
            
                        <div className="user_title">
                            <p className="title">employment info</p>
                        </div>
                        <hr/>
                        <div className="user_info">
                            <div className="info_row">
                                <i className="fa fa-calendar-alt"></i>
                                <p className="info_title_row">Start of employment period</p>
                                <p>{props.element.start_of_employment_period}</p>
                            </div>
                            <div className="info_row">
                                <p className="info_title_row2">Working day duration</p>
                                <p>{props.element.working_day} hours</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-calendar-alt"></i>
                                <p className="info_title_row">Start of employment period 2</p>
                                <p>{props.element.start_of_employment_period2}</p>
                            </div>
                            <div className="info_row">
                                <p className="info_title_row2">Working day duration</p>
                                <p>{props.element.working_day2} hours</p>
                            </div>
                        </div>
                        <div className="user_title">
                            <p className="title">adoitional modules</p>
                        </div>
                        <hr/>
                        <div className="user_info">
                            <div className="info_row">
                                <i className="fa fa-helicopter"></i>
                                <p className="info_title_row">Vocation</p>
                                <p>{props.element.has_vocation_access}</p>
                            </div>
                            <div className="info_row">
                                <i className="fa fa-address-card"></i>
                                <p className="info_title_row">Address book redesign</p>
                                <p>{props.element.address_book__redesign}</p>
                            </div>
                        </div>
                    </div>
                    {role != 'User' ? 
                    <div className="user_btn">
                        <div className="edit_btn">
                        <button className="edit_info"><Link to="/roles">edit details</Link></button>
                        </div>
                        <div className="edit_btn">
                        <button className="edit_info"><Link to="/roles">edit details</Link></button>
                        </div>
                    </div>  
                    :
                    <div className="user_btn"></div>
                    }
                </div>
        </div>

    )
}

export default CardPage;