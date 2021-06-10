import React from "react";
import Requests from "./Requests";
import RequestFormPopUp from "./RequestFormPopUp"
const RequestYear = (props) =>{
  
   
    return(
        <div>

        <div className="yearBlock">
            <p>{props.year} Year</p>
        </div>
        <div className="request">
        
            {props.requestData.map(item =>{if(new Date(item.start_data).getFullYear() == props.year){
                return <Requests item={item} getItem={props.getItem} totalItem={props.totalItem}
                key={item.id} isOpen={props.isOpen} togglePopup={props.togglePopup} />}})}

            </div>
            </div>
     
    )
}
export default RequestYear;