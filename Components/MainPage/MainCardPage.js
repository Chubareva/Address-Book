import React from "react";
import { Link } from "react-router-dom";
import '../../style/mainPage.scss';


const MainCardPage = (props) => {
        return(         
                <div className="cards_item_wrapper">
                <div className="cards_item">
                    <div className="cards_avatar">
                        <img src={props.element.avatar}/>
                    </div>
                    <div className="user_name">
                        <Link to="/card"><p className="cards_nameEN" onClick={() =>{props.cardredirect(props.element.nameEN)}}>{props.element.nameEN}</p></Link>
                        <p className="cards_nameRU">{props.element.nameRU}</p>
                    </div>
                    <hr/>
                    <div className="cards_description">
                        <div className="work_content">
                            <i className="fa fa-briefcase"></i>
                            <p className="cards_job">{props.element.job}</p>
                        </div>
                        <div className="door_content">
                            <i className="fa fa-door-open"></i>
                            <p className="cards_room">{props.element.room}</p>
                        </div>
                    </div>
                </div>
                </div>
        )
    }



export default MainCardPage;

