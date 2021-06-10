import React from "react";
import RequestYear from "./RequestYear";

const RequestsContainer = (props) => {
    return(
        
        <div className="request_part_items">
            <p className="request_title">My Leave Requests</p>
            
            {props.years.map(element => {return <RequestYear totalItem={props.totalItem} year ={element} getItem={props.getItem} requestData={props.requestData} key={element} isOpen = {props.isOpen} 
            togglePopup={props.togglePopup} />})}
            
        </div>
        
    )
}

export default RequestsContainer;